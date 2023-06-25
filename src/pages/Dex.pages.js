import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';

const DexPage = () => {
  const [firstInputValue, setFirstInputValue] = useState('');
  const [firstInputBlockchain, setFirstInputBlockchain] = useState(null);
  const [secondInputValue, setSecondInputValue] = useState('');
  const [secondInputBlockchain, setSecondInputBlockchain] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleFirstInputChange = (e) => {
    setFirstInputValue(e.target.value);
  };

  const handleFirstInputBlockchainChange = (e) => {
    setFirstInputBlockchain(e.value);
  };

  const handleSecondInputBlockchainChange = (e) => {
    setSecondInputValue(firstInputValue);
    setSecondInputBlockchain(e.value);
  };

  const onHideDialog = () => {
    setVisible(false);
  };

  const onShowDialog = () => {
    setVisible(true);
  };

  const blockchainOptions = [
    { label: 'Bitcoin', value: 'BTC' },
    { label: 'Ethereum', value: 'ETH' },
    { label: 'Cardano', value: 'ADA' },
    { label: 'Solana', value: 'SOL' },
  ];

  const footerContent = (
    <div>
      <Button
        label="Close"
        icon="pi pi-times"
        onClick={onHideDialog}
        className="p-button-text"
        severity="danger"
      />
    </div>
  );

  return (
    <div>
      <div style={{ height: '60px' }}></div>

      <div className="flex justify-content-center flex-wrap justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
            <img
              src="https://blocks.primereact.org/demo/images/blocks/logos/hyper.svg"
              alt="hyper"
              height={50}
              className="mb-3"
            />
            <div className="text-900 text-3xl font-medium mb-3">Dex</div>
            <div className="flex mb-3">
              <div style={{ position: "relative", left: "15%" }}>
                <InputText
                  id="firstInput"
                  type="text"
                  placeholder="Enter value"
                  value={firstInputValue}
                  onChange={handleFirstInputChange}
                />
              </div>
              <div style={{ position: "relative", left: "24%" }}>
                <MultiSelect
                  id="firstInputBlockchain"
                  value={firstInputBlockchain}
                  options={blockchainOptions}
                  onChange={handleFirstInputBlockchainChange}
                  placeholder="Select Token"
                />
              </div>
            </div>

            <div className="flex mb-3">
              <div style={{ position: "relative", left: "15%" }}>
                <InputText
                  id="secondInput"
                  type="text"
                  placeholder="Calculated value"
                  value={secondInputValue}
                  className="w-full mb-3"
                  readOnly
                />
              </div>
              <div className="mr-2 ">
                <div style={{ position: "relative", left: "96%" }}>
                  <MultiSelect
                    id="secondInputBlockchain"
                    value={secondInputBlockchain}
                    options={blockchainOptions}
                    onChange={handleSecondInputBlockchainChange}
                    placeholder="Select Token"
                  />
                </div>
              </div>
            </div>

            <Dialog
              header="Header"
              visible={visible}
              style={{ width: '50vw' }}
              onHide={onHideDialog}
              footer={footerContent}
            >
              <InputText placeholder='Swap tokens' className='w-full mb-3' id="secondInput" type="text" />
              <Button label="Stake" icon="pi pi-check-circle" className="w-full" />
            </Dialog>

            <Button label="Swap" icon="pi pi-external-link" className="w-full" onClick={onShowDialog} />
          </div>
        </div>
      </div>
      <div style={{ height: '40px' }}></div>
    </div>
  );
};

export default DexPage;
