import { Polybase } from "@polybase/client";
import { Auth } from '@polybase/auth'

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

    }

    async createProject(projectObject){
        await this.collectionReference.create([
            "5",
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

}
