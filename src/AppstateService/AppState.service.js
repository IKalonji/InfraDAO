import { Polybase } from "@polybase/client";
import { Auth } from '@polybase/auth'
import { MetaMaskSDK } from '@metamask/sdk';
import { ethers } from 'ethers';

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
        this.response = [];
        this.getItemsFromRecord();

        const MMSDK = new MetaMaskSDK();
        this.ethereum = MMSDK.getProvider();
        this.provider = new ethers.BrowserProvider(this.ethereum);

        this.projectContractAddress = "";
        this.membersContractAddress = "";
        this.walletAddress = "";
        this.connected = false;
    }

    async connectToMetamask(){
        //change chain:
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
        // alert("Connected to Metamask: ", this.walletAddress)        
        }).catch((error) => {
            alert("Could not connect: ", error)
        })


    }

    async createProject(projectObject){
        await this.collectionReference.create([
            "6",
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
        }).catch((error) => {
            console.info("error: ", error)
        })
    }

    async getItemFromRecord () {
        await this.collectionReference.record("1").get().then((data)=>{
            let item = data.data;
            console.log("item:", item);
            return item;
        }).catch((error)=>{
            console.log(error);
        });        
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
            this.response = temp;
        }).catch((error)=>{
            console.log(error)
        });
    }

    getUnApproved(){  
        return this.response;
    }

    getApproved(){
        return this.response;
    }

    contractGetApprovedProjects(){
        let signer = this.provider.getSigner();
        let contract = new ethers.Contract(this.projectContractAddress, this.abi, signer);
    }

    contractGetPendingProjects(){
        let signer = this.provider.getSigner();
        let contract = new ethers.Contract(this.projectContractAddress, this.abi, signer);
    }

    contractIsUserMemeber(){
        let signer = this.provider.getSigner();
        let contract = new ethers.Contract(this.projectContractAddress, this.abi, signer);
    }

    contractVote(){
        let signer = this.provider.getSigner();
        let contract = new ethers.Contract(this.projectContractAddress, this.abi, signer);
    }

    contractJoin(){
        let signer = this.provider.getSigner();
        let contract = new ethers.Contract(this.projectContractAddress, this.abi, signer);
    }

    contractSubmitProject(){
        let signer = this.provider.getSigner();
        let contract = new ethers.Contract(this.projectContractAddress, this.abi, signer);
    }



}
