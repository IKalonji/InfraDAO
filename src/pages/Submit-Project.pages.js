import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Editor } from "primereact/editor";
import { MultiSelect } from 'primereact/multiselect';
import { FileUpload } from 'primereact/fileupload';

import Image from './Assets/ai.jpg'

export default class SubmitProject extends Component {
  constructor(props) {
      super(props);
      this.state = {
      selectedCategory: null
      };
  }

  InfrastructureOptions = [
    { name: 'Residency', code: 'RES' },
    { name: 'Railway', code: 'RW' },
    { name: 'Telecoms', code: 'TLKM' },
    { name: 'Roads', code: 'ROAD' },
    { name: 'Manufacturing', code: 'MAN' },
    { name: 'Forestry', code: 'FOR' }
  ];

  handleChange = (e) => {
      this.setState({ selectedCategory: e.value });
  }

  renderHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
      </span>
      );
  };

  render() {
    const header = this.renderHeader();
    const { selectedCategory } = this.state;
    return (
      <div>
          <div style={{ height: "60px" }}></div>

          <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
              <div className="text-center mb-5">
                <img src={Image} alt="hyper" height={50} className="mb-3" />
                <div className="text-900 text-3xl font-medium mb-3">Submit Your Project</div>
              </div>
                <div>
                  <label htmlFor="SubmitorAddress" className="block text-900 font-medium mb-2">Submitor</label>
                  <InputText id="SubmitorAddress" type="text" placeholder="Submitor Address" className="w-full mb-3" />

                  <label htmlFor="ProjectName" className="block text-900 font-medium mb-2">Project Name</label>
                  <div style={{height:"13px"}}></div>
                  <InputText id="ProjectName" type="text" placeholder="Project Name" className="w-full mb-3" />

                  
                  <label htmlFor="SelectCategory" className="block text-900 font-medium w-full">Select Project Category</label>
                  <MultiSelect value={selectedCategory} onChange={this.handleChange} options={this.InfrastructureOptions} optionLabel="name"
                  placeholder="Select Infrastructure Category" maxSelectedLabels={3} className="w-full md:w-20rem" />
                
                  <div className="card">
                      <label htmlFor="ProjectDetails" className="block text-900 font-medium mb-2">Project Details</label>
                      <Editor headerTemplate={header} style={{ height: '320px' }} />
                  </div>

                  <label htmlFor="ProjectCost" className="block text-900 font-medium mb-2">Project Cost</label>
                  <InputText id="ProjectCost" type="text" placeholder="Project Cost" className="w-full mb-3" />

                  <label htmlFor="FileUpload" className="block text-900 font-medium mb-2">Upload Plans</label>
                  <FileUpload name="demo[]" multiple accept="image/*" />

                  <div>
                      <label htmlFor="FinancialsUpload" className="block text-900 font-medium mb-2">Upload Financials</label>
                      <FileUpload name="financials" multiple accept="*" />
                      {/* <Button label="Upload" icon="pi pi-upload" className="p-button-success" /> */}
                  </div>

                  <Button label="Submit Your Project" icon="pi pi-cloud-upload" className="w-full" />
                  </div>
              </div>
          </div>

          <div style={{ height: "40px" }}></div>
      </div>
      );
  }
}
