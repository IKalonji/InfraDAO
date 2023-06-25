import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { MultiSelect } from 'primereact/multiselect';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';

import { NeedApproval } from '../Models/ApprovedAndUnapprovedProjects';
import {AppStateService} from '../AppstateService/AppState.service';

import Image from './Assets/ai.jpg'
let service = new AppStateService();

export default function SubmitProject(){
  const [selectedCategory, setselectedCategory] = useState('');
  const [submitorAddress, setsubmitorAddress] = useState('');
  const [projectName, setprojectName] = useState('');
  const [projectImage, setprojectImage] = useState('');
  const [projectDetails, setprojectDetails] = useState('');
  const [linkToPlans, setlinkToPlans] = useState('');
  const [linkToFinancials, setlinkToFinancials] = useState('');
  const [projectCost, setprojectCost] = useState(0);
  const [raiseAmount, setraiseAmount] = useState(0);
  const [tokenization, settokenization] = useState(0);
  const [initPricePerToken, setinitPricePerToken] = useState(0);
  const [ExpectedBuyBack, setExpectedBuyBack] = useState(0);
  const [ReturnOnInvestment, setReturnOnInvestment] = useState(0);
  const [contractedDevelopers, setcontractedDevelopers] = useState('');
  const [mileStones, setmileStones] = useState('');
  const [files, setfiles] = useState([]);
  const [financials, setfinancials] = useState([]);
  const toast = useRef(null);

  service.getItemFromRecord();
  console.log("record data: " , service.record)

  const navigate = useNavigate();

  const InfrastructureOptions = [
    { name: 'Residency', code: 'RES' },
    { name: 'Railway', code: 'RW' },
    { name: 'Telecoms', code: 'TLKM' },
    { name: 'Roads', code: 'ROAD' },
    { name: 'Manufacturing', code: 'MAN' },
    { name: 'Forestry', code: 'FOR' }
  ];

  const handleSubmitorAddressChange = (event) => {
    setsubmitorAddress(event.target.value);
  }

  const handleProjectNameChange = (event) => {
    setprojectName(event.target.value)
  }

  const handleProjectImageChange = (event) => {
    setprojectImage(event.target.value)
  }

  const handleProjectDetailsChange = (event) => {
    setprojectDetails(event.target.value)
  }

  const handleLinkToPlansChange = (event) => {
    setlinkToPlans(event.target.value)
  }

  const handleLinktToFinancialsChange = (event) => {
    setlinkToFinancials(event.target.value)
  }

  const handleProjectCostChange = (event) => {
    setprojectCost(Number(event.target.value))
  }

  const handleRaiseAmountChange = (event) => {
    setraiseAmount(Number(event.target.value))
  }

  const handleTokenization = (event) => {
    settokenization(Number(event.target.value))
    setinitPricePerToken(Number(raiseAmount / tokenization))
  }

  const handleExpectedBuyBackChange = (event) => {
    setExpectedBuyBack(Number(event.target.value)); 
    setinitPricePerToken(Number(raiseAmount / tokenization))
    setReturnOnInvestment(Number(((ExpectedBuyBack-tokenization)/tokenization)*100))
    
  }


  const handleContractedDevelopersChange = (event) => {
    setcontractedDevelopers(event.target.value)
    setReturnOnInvestment(Number(((ExpectedBuyBack-tokenization)/tokenization)*100))
    setinitPricePerToken(Number(raiseAmount / tokenization))
  }

  const handleMilestanesChange  = (event) => {
    setmileStones(event.target.value)
    setReturnOnInvestment(Number(((ExpectedBuyBack-tokenization)/tokenization)*100))
    setinitPricePerToken(Number(raiseAmount / tokenization))
  }

  //Handling the changes for the multi select
  const handleMultiSelectChange = (e) => {
    setselectedCategory(e.value)
  }

  //Once the button is clicked this is the function called
  const handleButtonClick = () => {
    
    
    // Perform any necessary processing or validations on the values
    
    const values = {
      submitorAddress,
      projectName,
      projectImage,
      projectDetails,
      linkToPlans,
      linkToFinancials,
      projectCost,
      raiseAmount,
      tokenization,
      initPricePerToken,
      ExpectedBuyBack,
      ReturnOnInvestment,
      contractedDevelopers,
      mileStones,
      selectedCategory,
      files,
      financials
    };

    if (    
      !submitorAddress ||
      !projectName ||
      !projectImage ||
      !projectDetails ||
      !linkToPlans ||
      !linkToFinancials||
      !projectCost||
      !raiseAmount||
      !tokenization||
      !initPricePerToken||
      !ExpectedBuyBack||
      !ReturnOnInvestment||
      !selectedCategory
      ){

        toast.current.show({severity:'error', summary: 'Error', detail:'Please complete all inputs', life: 3000});
    }else{

    var projectObject = {
      submitorAddress: submitorAddress,
      projectName: projectName,
      projectImage: projectImage,
      projectCategory:`${selectedCategory}`,
      projectFullDescription: projectDetails,
      linkToPlans: linkToPlans,
      linkToFinancials: linkToFinancials,
      projectCost: projectCost,
      raiseAmount: raiseAmount,
      totalTokenAmount: tokenization,
      initialTokenPrice: initPricePerToken,
      ecpectedBuyBack: ExpectedBuyBack,
      returnOnInvestment: ReturnOnInvestment,
      contractedDevelopers: contractedDevelopers,
      milestones: mileStones,
    }

    service.createProject(projectObject)
    console.log("This is the records ::: ", service.records);


      console.log(NeedApproval);
      toast.current.show({
        severity: 'success',
        summary: 'Successfully uploaded Project',
        detail: JSON.stringify(values)
      });
      // setTimeout(navigate('/member/view-projects'), 13000)

    }

  }

  const handleSubmit = (event) => {
    // TODO: Submit the form data to the server
    event.preventDefault();
  };
   
  const renderHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
      </span>
      );
  };

  
    const header = renderHeader();
    // const { selectedCategory } = state;
    return (
    <div>

      <div>
      <Toast ref={toast} />
      </div>
      <form onSubmit={handleSubmit}>
      <div style={{ height: "60px" }}></div>
        <div className="flex align-items-center justify-content-center">
          <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div className="text-center mb-5">
              <img src={Image} alt="hyper" height={50} className="mb-3"  style={{borderRadius:"25%"}}/>
              <div className="text-900 text-3xl font-medium mb-3">Submit Your Project</div>
            </div>
              <div>
                <label htmlFor="SubmitorAddress" className="block text-900 font-medium mb-2">Submitor</label>
                <InputText id="submitorAddress" type="text" placeholder="Submitor Address" className="w-full mb-3" onChange={handleSubmitorAddressChange} value={submitorAddress} />
                <div style={{ height: "12px" }}></div>

                <label htmlFor="ProjectName" className="block text-900 font-medium mb-2">Project Name</label>
                <div style={{height:"13px"}}></div>
                <InputText id="projectName" type="text" placeholder="Project Name" className="w-full mb-3" onChange={handleProjectNameChange} value={projectName} />
                <div style={{ height: "12px" }}></div>

                
                <label htmlFor="projectImage" className="block text-900 font-medium mb-2">Project Image Url</label>
                <div style={{height:"13px"}}></div>
                <InputText id="projectImage" type="text" placeholder="Project Image" className="w-full mb-3" onChange={handleProjectImageChange} value={projectImage} />
                <div style={{ height: "12px" }}></div>

                
                <label htmlFor="SelectCategory" className="block text-900 font-medium w-full">Select Project Category</label>
                <MultiSelect value={selectedCategory} onChange={handleMultiSelectChange} options={InfrastructureOptions} optionLabel="name"
                  placeholder="Select Infrastructure Category"  className="w-full md:w-20rem" />
                
                <div style={{ height: "12px" }}></div>
              
                <div className="card">
                    <label htmlFor="ProjectDetails" className="block text-900 font-medium mb-2">Project Details</label>
                    <Editor headerTemplate={header} style={{ height: '320px' }} value={projectDetails} onTextChange={(e) => { setprojectDetails(e.textValue) }} />
                </div>
                <div style={{ height: "12px" }}></div>

                <label htmlFor="linkToPlans" className="block text-900 font-medium mb-2">Link to the project plans</label>
                <div style={{height:"13px"}}></div>
                <InputText id="linkToPlans" type="text" placeholder="Link to the project plans" className="w-full mb-3" onChange={handleLinkToPlansChange} value={linkToPlans} />
                <div style={{ height: "12px" }}></div>

                <label htmlFor="linkToFinancials" className="block text-900 font-medium mb-2">Link to your financials</label>
                <div style={{height:"13px"}}></div>
                <InputText id="linkToFinancials" type="text" placeholder="Link to financials" className="w-full mb-3" onChange={handleLinktToFinancialsChange} value={linkToFinancials} />
                <div style={{ height: "12px" }}></div>

                <label htmlFor="FileUpload" className="block text-900 font-medium mb-2">Upload KYC</label>
                <FileUpload name="PlanUpload" url={'/api/upload'} multiple 
                accept="image/*" 
                emptyTemplate={<p className="m-0">Upload all your project plans </p>} 
                onUpload={(e) => {files(e.files)}}/>

                <div style={{ height: "12px" }}></div>

        
                <div style={{ height: "12px" }}></div>

                <label htmlFor="ProjectCost" className="block text-900 font-medium mb-2">Project Cost</label>
                <InputText id="projectCost" placeholder="Project Cost" className="w-full mb-3" onChange={handleProjectCostChange} value={projectCost} keyfilter="int" />
                <div style={{ height: "12px" }}></div>

                <label htmlFor="RaiseAmount" className="block text-900 font-medium mb-2">Raise Amount Required</label>
                <InputText id="raiseAmount" inputMode="numeric" placeholder="Raise amount required" className="w-full mb-3" onChange={handleRaiseAmountChange} value={raiseAmount} keyfilter="int" />
                <div style={{ height: "12px" }}></div>

                <label htmlFor="TotalTokenAmount" className="block text-900 font-medium mb-2">Total Token Amount</label>
                <InputText id="tokenization" type="text" placeholder="Total token amount" className="w-full mb-3" onChange={handleTokenization} value={tokenization}  keyfilter="int"/>
                <div style={{ height: "12px" }}></div>

                <label htmlFor="InitPrice" className="block text-900 font-medium mb-2">Initial Price per Token</label>
                <InputText id="initPricePerToken" disabled type="text" placeholder="Initial Price per Token" className="w-full mb-3" readOnly value={initPricePerToken} keyfilter="int"/>
                <div style={{ height: "12px" }}></div>

                <label htmlFor="ExpectedBuyBack" className="block text-900 font-medium mb-2">Expected Token Buy Back {"(After project completion)"}</label>
                <InputText id="ExpectedBuyBack" type="text" placeholder="Expected Token Buy Back" className="w-full mb-3" onChange={handleExpectedBuyBackChange} value={ExpectedBuyBack} keyfilter="int" />
                <div style={{ height: "12px" }}></div>

                <label htmlFor="ReturnOnInvestment" className="block text-900 font-medium mb-2"> Return On Investment </label>
                <InputText id="ReturnOnInvestment"    type="text" placeholder="ROI" className="w-full mb-3" readOnly value={ReturnOnInvestment} keyfilter="int" tooltip='Return on Investment (field is read only)' tooltipOptions={{position: 'right'}}/>
                <div style={{ height: "12px" }}></div>

                <label htmlFor="ContractedDevelopers" className="block text-900 font-medium mb-2">Contracted Developers</label>
                <InputText id="contractedDevelopers" type="text" placeholder="Contracted Developers" className="w-full mb-3" onChange={handleContractedDevelopersChange} value={contractedDevelopers} />
                <div style={{ height: "12px" }}></div>

                <p></p>

                
                <label htmlFor="mileStones" className="block text-900 font-medium mb-2">Project Milestones</label>
                <InputText id="mileStones" type="text" placeholder="Project Milestones" className="w-full mb-3" onChange={handleMilestanesChange} value={mileStones} />
                <div style={{ height: "12px" }}></div>

                <Button label="Submit Your Project" icon="pi pi-cloud-upload" className="w-full" onClick={handleButtonClick} />
                </div>
            </div>
        </div>

        <div style={{ height: "40px" }}></div>
      </form>
    </div>
    );
  // }
}