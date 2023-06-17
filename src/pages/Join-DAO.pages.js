import React, { Component } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default class JoinDAO extends Component {
  render() {
    return (
        <div>
            <div style={{height:"60px"}}></div>
            
            <div className="flex align-items-center justify-content-center">
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                    <div className="text-center mb-5">
                        <img src="https://blocks.primereact.org/demo/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
                        <div className="text-900 text-3xl font-medium mb-3">Join DAO</div>
                        <span className="text-600 font-medium line-height-3">
                        "Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </span>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-900 font-medium mb-2">Stake</label>
                        <InputText id="text" type="text" placeholder="Stake to dApp" className="w-full mb-3" />

                        <Button label="Stake" icon="pi pi-user" className="w-full" />
                    </div>
                </div>
            </div>
            <div style={{height:"40px"}}></div>
      </div>
    )
  }
}
