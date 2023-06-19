import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';

export default class DexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstInputValue: '',
      firstInputBlockchain: null,
      secondInputValue: '',
      secondInputBlockchain: null
    };
  }

  handleFirstInputChange = (e) => {
    this.setState({ firstInputValue: e.target.value });
  };

  handleFirstInputBlockchainChange = (e) => {
    this.setState({ firstInputBlockchain: e.value });
  };

  handleSecondInputBlockchainChange = (e) => {
    const { firstInputValue } = this.state;
    this.setState({
      secondInputValue: firstInputValue,
      secondInputBlockchain: e.value
    });
  };

  render() {
    const { firstInputValue, firstInputBlockchain, secondInputValue, secondInputBlockchain } = this.state;
    const blockchainOptions = [
      { label: 'Bitcoin', value: 'BTC' },
      { label: 'Ethereum', value: 'ETH' },
      { label: 'Cardano', value: 'ADA' },
      { label: 'Solana', value: 'SOL' },
    ];

    return (
      <div>
        <div style={{ height: '60px' }} ></div>

        <div className="flex justify-content-center flex-wrap justify-content-center" >
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
                <div className="mr-2 flex justify-content-center flex-wrap">
                  <label htmlFor="firstInput" className="block text-900 font-medium mb-2">
                    First Input
                  </label>
                  <InputText
                    id="firstInput"
                    type="text"
                    placeholder="Enter value"
                    value={firstInputValue}
                    onChange={this.handleFirstInputChange}
                    className="w-full mb-3"
                  />
                </div>
                <div className="mr-2 ">
                  <label htmlFor="firstInputBlockchain" className="block text-900 font-medium mb-2">
                    First Input Blockchain
                  </label>
                  <MultiSelect
                    id="firstInputBlockchain"
                    value={firstInputBlockchain}
                    options={blockchainOptions}
                    onChange={this.handleFirstInputBlockchainChange}
                    placeholder="Select Blockchain"
                  />
                </div>
              </div>

              <div className="flex mb-3">
                <div className="mr-2 flex justify-content-center flex-wrap">
                  <label htmlFor="secondInput" className="block text-900 font-medium mb-2">
                    Second Input
                  </label>
                  <InputText className='w-full mb-3' id="secondInput" type="text" value={secondInputValue} readOnly />
                </div>
                <div className="mr-2 ">
                  <label htmlFor="secondInputBlockchain" className="block text-900 font-medium mb-2">
                    Second Input Blockchain
                  </label>
                  <MultiSelect
                    id="secondInputBlockchain"
                    value={secondInputBlockchain}
                    options={blockchainOptions}
                    onChange={this.handleSecondInputBlockchainChange}
                    placeholder="Select Blockchain"
                  />
                </div>
              </div>

              <Button label="Submit Your Project" icon="pi pi-user" className="w-full" />
            </div>
          </div>
        </div>
        <div style={{ height: '40px' }}></div>
      </div>
    );
  }
}
