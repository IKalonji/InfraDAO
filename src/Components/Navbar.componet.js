import React from 'react';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Toolbar } from 'primereact/toolbar';
import { useNavigate } from 'react-router-dom';



function Navbar() {

  function GoBackHome() {
    window.location.pathname = "/";
    
  }

  function GoToSubmit() {
    window.location.pathname = '/submit';
  }

  function GoToView() {
    window.location.pathname = '/user/view-projects';
  }

  function GoToDexPage() {
    window.location.pathname = '/dex-page';
  }
  function GoToProfilePage() {
    window.location.pathname = '/profile';
  }

  let items = [
    {
      label: 'Pending Projects',
      icon: 'pi pi-external-link',
      command: () => {
        window.location.pathname = '/member/view-projects';
      }
    },
    {
      label: 'Join DAO',
      icon: 'pi pi-refresh',
      command: () => {
        window.location.pathname = '/joinDAO';
      }
    },
  ];

  const startContent = (
  <a className="p-button-text"  style={{cursor:"pointer"}} onClick={GoBackHome}>
    <i className='pi pi-building' style={{ fontSize: '2rem'}}></i>
    <label>
        InfraDAO
    </label>
  </a>
  );

  const endContent = (
    <>
      <Button label="Submit project" icon="pi pi-plus" className="mr-2" onClick={GoToSubmit} text/>
      <Button label="View" icon="pi pi-image" className="mr-2" onClick={GoToView} text/>
      <Button label="DEX" className="mr-2" onClick={GoToDexPage} text/>
      <SplitButton label="DAO Members" icon="pi pi-view" model={  items} className="mr-2" text severity='success'></SplitButton>
      <Button icon="pi pi-user" rounded outlined severity="secondary" aria-label="User" onClick={GoToProfilePage} tooltip='Profile page' tooltipOptions={{position: 'left'}}/>
    </>
  );

  // render() {
    return (
      <div className="card">
        <Toolbar start={startContent} end={endContent} />
      </div>
    );
  // }
}

export default Navbar;
