import React, { Component } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
// import Checkbox from '@mui/material/Checkbox'

// import 

export default class SubmitProject extends Component {
  render() {
    return (
      <div>
        <div style={{height:"60px"}}></div>
        
        <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src="https://blocks.primereact.org/demo/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
                    <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                    <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                </div>

                <div>
                    <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                    <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

                    <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                    <InputText id="password" type="password" placeholder="Password" className="w-full mb-3" />
                    <Button label="Submit Your Project" icon="pi pi-user" className="w-full" />
                </div>
            </div>
        </div>
        <div style={{height:"40px"}}></div>
      </div>
    )
  }
}
