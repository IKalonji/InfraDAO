import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { MultiSelect } from 'primereact/multiselect';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';

import Image from './Assets/ai.jpg'

export default class SubmitProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
      submitorAddress: '',
      projectName: '',
      projectDetails: '',
      projectCost: '',
      tokenization: '',
      contractedDevelopers: '',
      files: [],
      financials: []
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

  //Handling the changes for the multi select
  handleMultiSelectChange = (e) => {
    this.setState({ selectedCategory: e.value });
  }

  //All changes for the input fiels
  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  
  //Once th button is clicked this is the function called
  handleButtonClick = () => {
    const {
      submitorAddress,
      projectName,
      projectDetails,
      projectCost,
      tokenization,
      contractedDevelopers,
      selectedCategory,
      files,
      financials
    } = this.state;
  
    // Perform any necessary processing or validations on the values
  
    const values = {
      submitorAddress,
      projectName,
      projectDetails,
      projectCost,
      tokenization,
      contractedDevelopers,
      selectedCategory,
      files,
      financials
    };
  
    this.toast.show({
      severity: 'success',
      summary: 'Successfully uploaded Project',
      detail: JSON.stringify(values)
    });
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
    const {
      selectedCategory,
      submitorAddress,
      projectName,
      projectDetails,
      projectCost,
      tokenization,
      contractedDevelopers,
      files,
      financials
    } = this.state;
  
    const header = this.renderHeader();
    // const { selectedCategory } = this.state;
    return (
      <div>
        <Toast ref={(el) => (this.toast = el)} />
          <div style={{ height: "60px" }}></div>

          <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
              <div className="text-center mb-5">
                <img src={Image} alt="hyper" height={50} className="mb-3"  style={{borderRadius:"25%"}}/>
                <div className="text-900 text-3xl font-medium mb-3">Submit Your Project</div>
              </div>
                <div>
                  <label htmlFor="SubmitorAddress" className="block text-900 font-medium mb-2">Submitor</label>
                  <InputText id="submitorAddress" type="text" placeholder="Submitor Address" className="w-full mb-3" onChange={this.handleChange} value={submitorAddress} />
                  <div style={{ height: "12px" }}></div>

                  <label htmlFor="ProjectName" className="block text-900 font-medium mb-2">Project Name</label>
                  <div style={{height:"13px"}}></div>
                  <InputText id="projectName" type="text" placeholder="Project Name" className="w-full mb-3" onChange={this.handleChange} value={projectName} />
                  <div style={{ height: "12px" }}></div>

                  
                  <label htmlFor="SelectCategory" className="block text-900 font-medium w-full">Select Project Category</label>
                  <MultiSelect value={selectedCategory} onChange={this.handleMultiSelectChange} options={this.InfrastructureOptions} optionLabel="name"
                    placeholder="Select Infrastructure Category"  className="w-full md:w-20rem" />
                  
                  <div style={{ height: "12px" }}></div>
                
                  <div className="card">
                      <label htmlFor="ProjectDetails" className="block text-900 font-medium mb-2">Project Details</label>
                      <Editor headerTemplate={header} style={{ height: '320px' }} value={projectDetails} onTextChange={(e) => this.setState({ projectDetails: e.htmlValue })} />
                  </div>
                  <div style={{ height: "12px" }}></div>

                  <label htmlFor="FileUpload" className="block text-900 font-medium mb-2">Upload Plans</label>
                  {/* <FileUpload name="demo[]" multiple accept="image/*" mode="basic"  /> */}
                  <FileUpload name="PlanUpload" url={'/api/upload'} multiple 
                  accept="image/*" 
                  emptyTemplate={<p className="m-0">Upload all your project plans </p>} 
                  onUpload={(e) => this.setState({ files: e.files })}/>

                  <div style={{ height: "12px" }}></div>

                  <div>
                      <label htmlFor="FinancialsUpload" className="block text-900 font-medium mb-2">Upload Financials</label>
                      <FileUpload name="financials" url={'/api/upload'} multiple 
                      accept="*" 
                      emptyTemplate={<p className="m-0">Upload your financials here</p>} 
                      onUpload={(e) => this.setState({ financials: e.files })}/>
                  </div>
                  <div style={{ height: "12px" }}></div>

                  <label htmlFor="ProjectCost" className="block text-900 font-medium mb-2">Project Cost</label>
                  <InputText id="projectCost" inputMode="numeric" placeholder="Project Cost" className="w-full mb-3" onChange={this.handleChange} value={projectCost} />
                  <div style={{ height: "12px" }}></div>

                  <label htmlFor="Tokenization" className="block text-900 font-medium mb-2">Tokenization</label>
                  <InputText id="tokenization" type="text" placeholder="Tokenization" className="w-full mb-3" onChange={this.handleChange} value={tokenization} />
                  <div style={{ height: "12px" }}></div>

                  <label htmlFor="ContractedDevelopers" className="block text-900 font-medium mb-2">Contracted Developers</label>
                  <InputText id="contractedDevelopers" type="text" placeholder="Contracted Developers" className="w-full mb-3" onChange={this.handleChange} value={contractedDevelopers} />
                  <div style={{ height: "12px" }}></div>

                  <Button label="Submit Your Project" icon="pi pi-cloud-upload" className="w-full" onClick={this.handleButtonClick} />
                  </div>
              </div>
          </div>

          <div style={{ height: "40px" }}></div>
      </div>
      );
  }
}
