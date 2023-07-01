import React, { Component, useState, useEffect } from 'react'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom';
import {AppStateService} from '../AppstateService/AppState.service';

import { useMountEffect } from 'primereact/hooks';

export default function Viewprojects(){
  const service = new AppStateService();
  const navigate = useNavigate();

  useMountEffect(() => {
    service.getApproved();
    service.getUnApproved();
  })
  
  let approved = service.getApproved();
  let unapproved = service.getUnApproved();

    const GoToViewProject = (Project, path) => {
      const data = {
        name: Project.projectName,
        id: Project.id,
        description: Project.milestones,
        projectType: Project.projectCategory,
        fullDescription: Project.projectFullDescription,
        plansLink:Project.linkToPlans,
        finacialsLink:Project.linkToFinancials,
        amountOfTokens: Project.totalTokenAmount,
        projectDevelopers: Project.contractedDevelopers,
        projectROI:Project.returnOnInvestment,
        amountRaise: Project.raiseAmount
      };
        navigate(path, {state: data})
      };

    if (window.location.pathname === "/member/view-projects"){
        
        return(
          <div>
          <div className="surface-0">
              <div className="text-900 font-bold text-6xl mb-4 text-center">The following projects require approval</div>
              <div className="text-700 text-xl mb-6 text-center line-height-3"> These are all the project that have not been approved by the communtiy as yet. </div>  
              <div className="grid">
                  {
                      unapproved.map((project, index) => (
                          <div className="col-12 lg:col-4" key={index}>
                            <div className="p-3 h-full">
                              <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                                <div className="text-900 font-medium text-xl mb-2">{project.projectName}</div>
                                <div className="text-600">{project.milestones}</div>
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
                                <Button label="View" className="p-3 w-full mt-auto" icon="pi pi-eye" onClick={() => {GoToViewProject(project, "/member/view-the-project")}} />
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
                    approved.map((project, index) => (
                        <div className="col-12 lg:col-4" key={index}>
                          <div className="p-3 h-full">
                            <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                              <div className="text-900 font-medium text-xl mb-2">{project.projectName}</div>
                              <div className="text-600">{project.milestones}</div>
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
                              <Button label="View" className="p-3 w-full mt-auto" icon="pi pi-eye" onClick={() => {GoToViewProject(project, "/user/view-the-project")}} />
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
