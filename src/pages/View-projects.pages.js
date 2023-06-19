import React, { Component } from 'react'
import { Button } from 'primereact/button'

import { ApprovedProjects, NeedApproval } from '../Models/ApprovedAndUnapprovedProjects'

export default class Viewprojects extends Component {
    
    project = ApprovedProjects;
    unApproved = NeedApproval;

    ViewSpecificProject(){
        window.location.href = "/user/view-the-project"
    }

    GoToViewProject = (Project) => {
        const data = {
            name: Project.projectName,
            description: Project.projectShortDescription,
            projectType: Project.projectType,
            fullDescription: Project.fullDescription,
            projectDevelopers: Project.projectDevelopers,
            amountRaise: Project.ammountToBeRaised
          };
          const encodedData = encodeURIComponent(JSON.stringify(data));
          window.location.href = `/user/view-the-project?data=${encodedData}`;
      };

      GoToMemberViewProject = (Project) => {
        const data = {
            name: Project.projectName,
            description: Project.projectShortDescription,
            projectType: Project.projectType,
            fullDescription: Project.fullDescription,
            projectDevelopers: Project.projectDevelopers,
            amountRaise: Project.ammountToBeRaised
          };
          const encodedData = encodeURIComponent(JSON.stringify(data));
          window.location.href = `/member/view-the-project?data=${encodedData}`;
      };

  render() {


    if (window.location.pathname === "/member/view-projects"){
        return(
          <div>
          <div className="surface-0">
              <div className="text-900 font-bold text-6xl mb-4 text-center">The following projects require approval</div>
              <div className="text-700 text-xl mb-6 text-center line-height-3"> These are all the project that have been approved by the communtiy. </div>  
              <div className="grid">
                  {
                      this.unApproved.map((project, index) => (
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
                                <Button label="View" className="p-3 w-full mt-auto" onClick={() => {this.GoToMemberViewProject(project)}} />
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
                    this.project.map((project, index) => (
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
                              <Button label="View" className="p-3 w-full mt-auto" onClick={() => {this.GoToViewProject(project)}} />
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
  }
}
