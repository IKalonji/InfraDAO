import { ApprovedProjects, NeedApproval } from '../Models/ApprovedAndUnapprovedProjects';
import { Polybase } from "@polybase/client";


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
        this.db = new Polybase({
            defaultNamespace: "your-namespace",
          });
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
