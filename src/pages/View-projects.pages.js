import React, { Component } from 'react'

import { Button } from 'primereact/button'

export default class Viewprojects extends Component {
    ViewSpecificProject(){
        window.location.href = "/user/view-the-project"
    }
  render() {
    return (
      <div>
        <div className="surface-0">
            <div className="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
            <div className="text-700 text-xl mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>

            <div className="grid">
                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                            <div className="text-900 font-medium text-xl mb-2">Basic</div>
                            <div className="text-600">Plan description</div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <div className="flex align-items-center">
                                <img src={'https://static.vecteezy.com/system/resources/previews/004/641/880/original/illustration-of-high-school-building-school-building-free-vector.jpg'}
                                    alt=''
                                    style={{ width: '60%', height: '60%', objectFit: 'cover', borderRadius: '6px' }}/>
                            </div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <ul className="list-none p-0 m-0 flex-grow-1">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Arcu vitae elementum</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Dui faucibus in ornare</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Morbi tincidunt augue</span>
                                </li>
                            </ul>
                            <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                            <Button label="View" className="p-3 w-full mt-auto" onClick={this.ViewSpecificProject}/>
                        </div>
                    </div>
                </div>

                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                            <div className="text-900 font-medium text-xl mb-2">Premium</div>
                            <div className="text-600">Plan description</div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <div className="flex align-items-center">
                                    <img src={'https://static.vecteezy.com/system/resources/previews/004/641/880/original/illustration-of-high-school-building-school-building-free-vector.jpg'}
                                    alt=''
                                    style={{ width: '60%', height: '60%', objectFit: 'cover', borderRadius: '6px' }}/>
                            </div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <ul className="list-none p-0 m-0 flex-grow-1">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Arcu vitae elementum</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Dui faucibus in ornare</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Morbi tincidunt augue</span>
                                </li>
                                
                            </ul>
                            <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <Button label="View" className="p-3 w-full mt-auto" onClick={this.ViewSpecificProject}/>
                        </div>
                    </div>
                </div>

                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 flex flex-column" style={{ borderRadius: '6px' }}>
                            <div className="text-900 font-medium text-xl mb-2">Enterprise</div>
                            <div className="text-600">Plan description</div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <div className="flex align-items-center">
                            <img src={'https://static.vecteezy.com/system/resources/previews/004/641/880/original/illustration-of-high-school-building-school-building-free-vector.jpg'}
                                    alt=''
                                    style={{ width: '60%', height: '60%', objectFit: 'cover', borderRadius: '6px' }}/>
                            </div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <ul className="list-none p-0 m-0 flex-grow-1">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Arcu vitae elementum</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Dui faucibus in ornare</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Morbi tincidunt augue</span>
                                </li>
                                
                            </ul>
                            <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <Button label="View" className="p-3 w-full mt-auto" onClick={this.ViewSpecificProject}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
      </div>
    )
  }
}
