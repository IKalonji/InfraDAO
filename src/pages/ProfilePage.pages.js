import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';

const ProfilePage = () => {
  const [stakeAmount, setStakeAmount] = useState(0);

  const header = (
    <i className="pi pi-user" style={{ fontSize: '2.5rem' }}></i>
  );

  const footer = (
    <Button label="Return Stake" icon="pi pi-money-bill" className="p-button-secondary" disabled={stakeAmount === 0} />
  );

  return (
    <div>
      <div style={{ height: "60px" }}></div>

      <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
            <Card title="John Doe" subTitle="Software Engineer" style={{ width: '100%' }} footer={footer} header={header}>
              <div>
                <strong>Wallet Address:</strong> 0xA
              </div>
              <div>
                <strong>Staked Amount:</strong> 0
              </div>
              <div>
                <strong>Project voted:</strong> 0
              </div>
              <div>
                <strong>DAO member:</strong> 0
              </div>

            </Card>
          </div>

          <div>
            <label htmlFor="stake" className="block text-900 font-medium mb-2">Stake</label>
            <InputText id="stake" type="text" placeholder="Stake to dApp" className="w-full mb-3" />
            <Button label="Stake" icon="pi pi-user" className="w-full" />
          </div>
        </div>
      </div>

      <div style={{ height: "40px" }}></div>
    </div>
  );
};

export default ProfilePage;
