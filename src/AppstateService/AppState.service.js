import { ApprovedProjects, NeedApproval } from '../Models/ApprovedAndUnapprovedProjects';
import { Polybase } from "@polybase/client";
import { Auth } from '@polybase/auth'

export default class AppStateService {

    
    constructor(){
        if (typeof AppStateService.instance === 'object') {
            console.log("instance returned");
            return AppStateService.instance;
        }
        AppStateService.instance = this;
        console.log("instance created");

        this.ApproveProject = ApprovedProjects;
        this.UnApproved = NeedApproval;
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

    }

    async createProject(projectObject){
        console.log("Initial price: ", projectObject.initialTokenPrice);
        console.log("ROI: ", projectObject.returnOnInvestment);

        await this.collectionReference.create([
            "Approved",
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
        const record = await this.collectionReference.record("Approved").get();
        // Get data from the record
        const { data } = record; // or const data = record.data
        // Record is CollectionRecordResponse instance, so you can also get again to refresh
        const updatedRecord = record.get();
        console.log("updated record:", data);

      }

      async listRecords () {
        const records = await this.collectionReference.get();

        console.log("record: ", records)
      }

    getApprovedProject(){
        return this.ApproveProject
    }

    setApprovedProject(project){
        this.ApproveProject.push(project)
    }

    //Unapproved projects
    getUnApprovedProject(){
        console.log("getting Un Approved");
        return this.UnApproved
    }

    setUnApprovedProject(project){
        console.log("setUnApproved");
        this.UnApproved.push(project)
    }

}

