import React from 'react';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Toolbar } from 'primereact/toolbar';

class Navbar extends React.Component {
  GoBackHome() {
    window.location.href = "/";
  }

  GoToSubmit() {
    window.location.href = '/submit';
  }

  GoToView() {
    window.location.href = '/user/view-projects';
  }

  GoToDexPage() {
    window.location.href = '/dex-page';
  }
  GoToProfilePage() {
    window.location.href = '/profile';
  }

  items = [
    {
      label: 'DAO Members',
      icon: 'pi pi-external-link',
      command: () => {
        window.location.href = '/member/view-projects';
      }
    },
    {
      label: 'Join DAO',
      icon: 'pi pi-refresh',
      command: () => {
        window.location.href = '/joinDAO';
      }
    },
  ];

  startContent = (
  <a className="p-button-text" onClick={this.GoBackHome} style={{cursor:"pointer"}}>
    <i className='pi pi-building' style={{ fontSize: '2rem'}}></i>
    <label>
        InfraDAO
    </label>
  </a>
  );

  endContent = (
    <>
      <Button label="Submit project" icon="pi pi-plus" className="mr-2" onClick={this.GoToSubmit} text/>
      <Button label="View" icon="pi pi-image" className="mr-2" onClick={this.GoToView} text/>
      <Button label="DEX" className="mr-2" onClick={this.GoToDexPage} text/>
      <SplitButton label="DAO Members" icon="pi pi-view" model={this.items} className="mr-2" text severity='success'></SplitButton>
      <Button icon="pi pi-user" rounded outlined severity="secondary" aria-label="User" onClick={this.GoToProfilePage} />
    </>
  );

  render() {
    return (
      <div className="card">
        <Toolbar start={this.startContent} end={this.endContent} />
      </div>
    );
  }
}

export default Navbar;
