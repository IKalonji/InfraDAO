import React, {useState} from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { AppStateService } from '../AppstateService/AppState.service';

const JoinDAO = () => {
  let service = new AppStateService();
  const [inputTextValue, setInputTextValue] = useState('');

  const handleButtonClick = () => {
    
    console.log(inputTextValue)
    service.contractJoin(inputTextValue)
  }

  const handleInputChange = (event) => {
    setInputTextValue(Number(event.target.value));
  }

  return (
    <div>
      <div style={{ height: "60px" }}></div>

      <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
            <img src="https://blocks.primereact.org/demo/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
            <div className="text-900 text-3xl font-medium mb-3">Join DAO</div>
            <span className="text-600 font-medium line-height-3">
              Join our DAO and become a member by staking your desired amount.
               Your stake will contribute to the growth and development of our infrastructure projects.
            </span>
          </div>

          <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Stake</label>
            <InputText id="text" type="text" placeholder="Stake to dApp" className="w-full mb-3" keyfilter="int" onChange={handleInputChange} value={inputTextValue}/>
            <Button label="Stake" icon="pi pi-user" className="w-full" onClick={handleButtonClick}/>
          </div>
        </div>
      </div>
      <div style={{ height: "40px" }}></div>
    </div>
  );
};

export default JoinDAO;
