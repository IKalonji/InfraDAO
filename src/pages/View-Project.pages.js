import React, { Component } from 'react'
import {Chip} from 'primereact/chip'
import { Button } from 'primereact/button'
import { useLocation } from 'react-router-dom'
import './Styles/View-Project.style.css'

export default function ViewProject(){

    const location = useLocation();
    const data = location.state

    if (window.location.pathname ==="/member/view-the-project"){
        
        return(
        <div>

        <div style={{height:"20px"}}></div>

        <div className="grid">
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Project Amount</span>
                            <div className="text-900 font-medium text-xl">${data.amountRaise}</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-money-bill text-blue-500 text-xl"></i>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">44%+ new </span>
                    <span className="text-500">since last visit</span>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Tokens Allocated</span>
                            <div className="text-900 font-medium text-xl">{data.amountOfTokens} total tokens</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">%52+ </span>
                    <span className="text-500">since last week</span>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Voted Yes</span>
                            <div className="text-900 font-medium text-xl">$28441</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">520  </span>
                    <span className="text-500">newly registered</span>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Voted No</span>
                            <div className="text-900 font-medium text-xl">152 Unread</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-comment text-purple-500 text-xl"></i>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">85 </span>
                    <span className="text-500">responded</span>
                </div>
            </div>
        </div>

        {/* Additional Information for each project */}

        <div className='horizontal-spacer' ></div>
        <div className="surface-0">
            <div className="font-medium text-3xl text-900 mb-3">
                {data.name}
            </div>
            <div className="text-500 mb-5">{data.description}</div>
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Project Name:</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data.name}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Type of project:</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                        <Chip label={`${data.projectType}`} className="mr-2" />
                       
                    </div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Developers:</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data.projectDevelopers}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Expected ROI:</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data.projectROI}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Link to Financials:</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data.finacialsLink}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Link to project plans:</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data.plansLink}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Amount Raised: </div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data.amountRaise}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Full description:</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                        {data.fullDescription}
                    </div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        
                    </div>
                </li>
            </ul>
            <div style={{height:"20px"}}></div>
            <Button label="Buy Tokens" className="w-full"/>
            <div style={{height:"20px"}}></div>
        </div>
      </div>
        )
    }    
    else if (window.location.pathname === "/user/view-the-project"){
        return (
            <div>

            <div style={{height:"20px"}}></div>
    
            <div className="grid">
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Project Amount</span>
                                <div className="text-900 font-medium text-xl">${data.amountRaise}</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-money-bill text-blue-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">44%+ new </span>
                        <span className="text-500">since last visit</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Tokens Allocated</span>
                                <div className="text-900 font-medium text-xl">{data.amountOfTokens} total tokens</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">%52+ </span>
                        <span className="text-500">since last week</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Voted Yes</span>
                                <div className="text-900 font-medium text-xl">$28441</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">520  </span>
                        <span className="text-500">newly registered</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Voted No</span>
                                <div className="text-900 font-medium text-xl">152 Unread</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-comment text-purple-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">85 </span>
                        <span className="text-500">responded</span>
                    </div>
                </div>
            </div>
    
            {/* Additional Information for each project */}
    
            <div className='horizontal-spacer' ></div>
            <div className="surface-0">
                <div className="font-medium text-3xl text-900 mb-3">
                    {data.name}
                </div>
                <div className="text-500 mb-5">{data.description}</div>
                <ul className="list-none p-0 m-0">
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Project Name:</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data.name}</div>
                        <div className="w-6 md:w-2 flex justify-content-end">
                            
                        </div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Type of project:</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                            <Chip label={`${data.projectType}`} className="mr-2" />
                        </div>
                        <div className="w-6 md:w-2 flex justify-content-end">
                            
                        </div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Developers:</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data.projectDevelopers}</div>
                        <div className="w-6 md:w-2 flex justify-content-end">
                            
                        </div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Expected ROI:</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data.projectROI}</div>
                        <div className="w-6 md:w-2 flex justify-content-end">
                            
                        </div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Link to Financials:</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data.finacialsLink}</div>
                        <div className="w-6 md:w-2 flex justify-content-end">
                            
                        </div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Link to project plans:</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data.plansLink}</div>
                        <div className="w-6 md:w-2 flex justify-content-end">
                            
                        </div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Amount Raised: </div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data.amountRaise}</div>
                        <div className="w-6 md:w-2 flex justify-content-end">
                            
                        </div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Full description:</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                            {data.fullDescription}
                        </div>
                        <div className="w-6 md:w-2 flex justify-content-end">
                            
                        </div>
                    </li>
                </ul>
                <div style={{height:"20px"}}></div>
                <Button label="Buy Tokens" className="w-full" disabled/>
                <div style={{height:"20px"}}></div>
            </div>

          </div>
        )
    }
//   }
}
