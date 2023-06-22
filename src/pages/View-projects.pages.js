import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom';
import AppStateService from '../AppstateService/AppState.service';

export default function Viewprojects(){

    let service = new AppStateService();
    const navigate = useNavigate();
       
    function ViewSpecificProject(){
        window.location.pathname = "/user/view-the-project"
    }

    const GoToViewProject = (Project) => {
        const data = {
            name: Project.projectName,
            description: Project.projectShortDescription,
            projectType: Project.projectType,
            fullDescription: Project.fullDescription,
            projectDevelopers: Project.projectDevelopers,
            amountRaise: Project.ammountToBeRaised
          };
          const encodedData = encodeURIComponent(JSON.stringify(data));
          // window.location.pathname = `/user/view-the-project?data=${encodedData}`;

          navigate("/user/view-the-project", {state: data})
      };

      const GoToMemberViewProject = (Project) => {
        const data = {
            name: Project.projectName,
            description: Project.projectShortDescription,
            projectType: Project.projectType,
            fullDescription: Project.fullDescription,
            projectDevelopers: Project.projectDevelopers,
            amountRaise: Project.ammountToBeRaised
          };
          const encodedData = encodeURIComponent(JSON.stringify(data));
          // window.location.pathname = `/member/view-the-project?data=${encodedData}`;
          navigate("/member/view-the-project", {state: data})
      };

  // render() {
    console.log("appstate: ", service.getApprovedProject());

    const Approved = service.getApprovedProject()
    const UnApproved = service.getUnApprovedProject()

    console.log('Approved List: ', Approved);
    console.log('Un Approved list: ', UnApproved)

    if (window.location.pathname === "/member/view-projects"){
        return(
          <div>
          <div className="surface-0">
              <div className="text-900 font-bold text-6xl mb-4 text-center">The following projects require approval</div>
              <div className="text-700 text-xl mb-6 text-center line-height-3"> These are all the project that have been approved by the communtiy. </div>  
              <div className="grid">
                  {
                      UnApproved.map((project, index) => (
                          <div className="col-12 lg:col-4" key={index}>
                            <div className="p-3 h-full">
                              <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                                <div className="text-900 font-medium text-xl mb-2">{project.projectName}</div>
                                <div className="text-600">{project.projectShortDescription}</div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <div className="flex justify-content-center flex-wrap" >
                                  <img
                                    src={project.projectImage}
                                    alt=""
                                    className='max-w-full max-h-full'
                                  />
                                </div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <ul className="list-none p-0 m-0 flex-grow-1">
                                  <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span> KYC </span>
                                  </li>
                                  <li className="flex align-items-center mb-3">
                                    <i className="pi pi-times-circle text-red-500 mr-2"></i>
                                    <span>Approved</span>
                                  </li>
                                  <li className="flex align-items-center mb-3">
                                    <i className="pi pi-times-circle text-red-500 mr-2"></i>
                                    <span>Tokenized</span>
                                  </li>
                                </ul>
                                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <Button label="View" className="p-3 w-full mt-auto" icon="pi pi-eye" onClick={() => {GoToMemberViewProject(project)}} />
                              </div>
                            </div>
                          </div>
                        ))
                  }
              
              </div>
          </div>
      
        </div>    
        )
    }else if (window.location.pathname === "/user/view-projects"){

    return (
        <div>
        <div className="surface-0">
            <div className="text-900 font-bold text-6xl mb-4 text-center">Approved projects</div>
            <div className="text-700 text-xl mb-6 text-center line-height-3"> These are all the project that have been approved by the communtiy. </div>

            <div className="grid">
                {
                    Approved.map((project, index) => (
                        <div className="col-12 lg:col-4" key={index}>
                          <div className="p-3 h-full">
                            <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                              <div className="text-900 font-medium text-xl mb-2">{project.projectName}</div>
                              <div className="text-600">{project.projectShortDescription}</div>
                              <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                              <div className="flex justify-content-center flex-wrap" >
                                <img
                                  src={project.projectImage}
                                  alt=""
                                  className='max-w-full max-h-full'
                                />
                              </div>
                              <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                              <ul className="list-none p-0 m-0 flex-grow-1">
                                <li className="flex align-items-center mb-3">
                                  <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                  <span>KYC Contract</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                  <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                  <span>Approved</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                  <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                  <span>Tokenized</span>
                                </li>
                              </ul>
                              <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                              <Button label="View" className="p-3 w-full mt-auto" icon="pi pi-eye" onClick={() => {GoToViewProject(project)}} />
                            </div>
                          </div>
                        </div>
                      ))
                }
            
            </div>
        </div>
    
      </div>
    )
    }
  // }
}
