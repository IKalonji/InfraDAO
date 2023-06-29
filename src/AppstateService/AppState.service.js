import { Polybase } from "@polybase/client";
import { Auth } from '@polybase/auth'
import { MetaMaskSDK } from '@metamask/sdk';
import { ethers } from 'ethers';
import { infradaoABI, projectsABI } from "../Models/ABI";

export class AppStateService {

    
    constructor(){
        if (typeof AppStateService.instance === 'object') {
            console.log("instance returned");
            return AppStateService.instance;
        }
        AppStateService.instance = this;
        console.log("instance created");

        const db = new Polybase({
            defaultNamespace: "pk/0xbd242ce427525d219c617b9856f0052b52334321d47d1793a7653cab5b2dac45792735a33e4b2789cbf8063555816d8a37226f8b393645c78244c175a010fbed/InfraDAO",
        });
        const auth = new Auth()
        db.signer(async (data) => {
            return {
                h: 'eth-personal-sign',
                sig: await auth.ethPersonalSign(data)
        }})
        
        this.collectionReference = db.collection('InfrastructureProject')

        const MMSDK = new MetaMaskSDK();
        this.ethereum = MMSDK.getProvider();
        this.provider = new ethers.BrowserProvider(this.ethereum);

        this.projectContractAddress = "0xDCEba341671a69283839f736d68885DDa0027F8d";
        this.membersContractAddress = "0xBc891E9012cAdEd71fEc8988a2ec093c4D82ED77";
        this.walletAddress = "";
        this.isUserMemeber = false;
        this.connected = false;
        this.nextPolybaseRecordID = null;

        this.contractPendingProjects = [];
        this.contractApprovedProjects = [];
        this.polybaseResponse = []

        this.getItemsFromRecord()
    }

    async connectToMetamask(){
        if(!this.ethereum){
            alert("Please install Metamask and configure Hedera Testnet")
            throw Error("Metamask not installed");
        }
        const chainId = await this.ethereum.request({ method: 'eth_chainId' });
        if(chainId !== '0x128'){
            try {
                await this.ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: '0x128' }] // chainId must be in hexadecimal numbers
                });
              } catch (error) {
                if (error.code === 4902) {
                  try {
                    await this.ethereum.request({
                      method: 'wallet_addEthereumChain',
                      params: [
                        {
                          chainName: 'Hedera Testnet',
                          chainId: '0x128',
                          nativeCurrency: {
                            name: 'HBAR',
                            symbol: 'HBAR',
                            decimals: 18
                          },
                          rpcUrls: ['https://testnet.hashio.io/api']
                        },
                      ],
                    });
                  } catch (addError) {
                    console.error(addError);
                  }
                }
                console.error(error);
              }
        }
        //connect
        this.ethereum.request({ method: 'eth_requestAccounts', params: [] }).then((data) => {
        this.walletAddress = data[0];
        this.connected = true;
        const event = new Event("loggedIn");
        window.dispatchEvent(event);
        this.contractIsUserMemeber();       
        }).catch((error) => {
            alert("Could not connect: ", error)
        })


    }

    generatePolybaseID = () => {
        this.nextPolybaseRecordID = this.polybaseResponse.length + 1;
        return this.nextPolybaseRecordID.toString();
    }

    async createProject(projectObject){
        let id = this.generatePolybaseID()
        await this.collectionReference.create([
            id,
            projectObject.submitorAddress,
            projectObject.projectName,
            projectObject.projectImage,
            projectObject.projectCategory,
            projectObject.projectFullDescription,
            projectObject.linkToPlans,
            projectObject.linkToFinancials,
            projectObject.projectCost,
            projectObject.raiseAmount,
            projectObject.totalTokenAmount,
            projectObject.initialTokenPrice,
            projectObject.ecpectedBuyBack,
            projectObject.returnOnInvestment,
            projectObject.contractedDevelopers,
            projectObject.milestones
        ]).then((data) => {
            console.info("data: ", data)
            this.contractSubmitProject(projectObject.projectName, this.nextPolybaseRecordID)
        }).catch((error) => {
            console.info("error: ", error)
        })
    }

    async getItemsFromRecord () {
        await this.collectionReference.get().then((data)=>{
            let array = data.data;
            let temp = []  
            array.forEach(element => {
                temp.push(element.data)
            });
            console.log(temp);
            console.log("lenth: ", temp.length);
            this.polybaseResponse = temp;
        }).catch((error)=>{
            console.log(error)
        });
    }

    getUnApproved(){  
        this.contractGetPendingProjects();
        let temp = []
        this.contractPendingProjects.forEach(contractItem => {
            this.polybaseResponse.forEach(polybaseItem => {
                console.log("contract item: ", contractItem);
                console.log("Polybase item: ", polybaseItem);
                if(polybaseItem.id === contractItem[1].toString()){
                    temp.push(polybaseItem)
                }
            });
        });
        return temp
    }

    getApproved(){
        this.contractGetApprovedProjects();
        let temp = []
        this.contractApprovedProjects.forEach(contractItem => {
            this.polybaseResponse.forEach(polybaseItem => {
                if(polybaseItem.id === contractItem[1].toString()){
                    temp.push(polybaseItem)
                }
            });
        });
        return temp
    }

    async contractGetApprovedProjects(){
        console.log("contract called");
        let signer = await this.provider.getSigner();
        let contract = new ethers.Contract(this.projectContractAddress, projectsABI, signer);

        try {
            const result = await contract.getApproved();
            console.log('approved projects: ', result);
            this.contractApprovedProjects = result;
          } catch (error) {
            alert("There was getting the projects. " + error.reason);
            console.error('Error calling contract function:', error);
          }
    }

    async contractGetPendingProjects(){
        console.log("contract called");
        let signer = await this.provider.getSigner();
        let contract = new ethers.Contract(this.projectContractAddress, projectsABI, signer);

        try {
            const result = await contract.getPending();
            console.log('pending projects: ', result);
            this.contractPendingProjects = result;
          } catch (error) {
            alert("There was getting the projects. " + error.reason);
            console.error('Error calling contract function:', error);
          }
    }

    async contractIsUserMemeber(){
        let signer = await this.provider.getSigner();
        let contract = new ethers.Contract(this.membersContractAddress, infradaoABI, signer);

        try {
            console.log(this.walletAddress);
            const result = await contract.isMember(this.walletAddress);
            console.log('is member: ', result);
            this.isUserMemeber = result;
          } catch (error) {
            alert("There was getting membership. " + error.reason);
            console.error('Error calling contract function:', error);
          }
    }

    projectVote(id){
        for(let i = 0; i < this.contractPendingProjects.length; i++){
            if( this.contractPendingProjects[i][1].toString() === id ) {
                this.contractVote(i);
            }
        }
    }

    async contractVote(_index, _votes=100){
        console.log(_index, _votes);
        let signer = await this.provider.getSigner();
        let contract = new ethers.Contract(this.membersContractAddress, infradaoABI, signer);

        try {
            const result = await contract.vote(_index, _votes).then().catch((error)=>{console.log(error);});
            console.log('voted: ', result);
          } catch (error) {
            alert("There was an error voting. " + error.reason);
            console.error('Error calling contract function:', error);
          }
    }

    async contractJoin(_stakeAmount){
        let signer = await this.provider.getSigner();
        let contract = new ethers.Contract(this.membersContractAddress, infradaoABI, signer);
        let amount = ethers.parseEther(_stakeAmount.toString())
        try {
            const result = await contract.join({value: amount});
            console.log('Joined: ', result);
          } catch (error) {
            alert("There was an error joining. " + error.reason);
            console.error('Error calling contract function:', error);
          }
    }

    async contractSubmitProject(_name, _polybaseID){
        let signer = await this.provider.getSigner();
        let contract = new ethers.Contract(this.projectContractAddress, projectsABI, signer);

        try {
            const result = await contract.submitProject(_name, _polybaseID);
            console.log('Submitted: ', result);
          } catch (error) {
            alert("There was an error submitting. " + error.reason);
            console.error('Error calling contract function:', error);
          }
    }



}
