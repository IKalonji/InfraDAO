import React from 'react';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Toolbar } from 'primereact/toolbar';
import Typography from '@mui/material/Typography';

import Image from './Assets/TopIcon.png';

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
    // <Button className="p-button-text" onClick={this.GoBackHome} >
    //   <img src={Image} alt='' style={{ width: "28%", height: "42.5%", borderRadius: "25%" }} />
    //   InfraDAO
    // </Button>
    <a href="/" style={{ textDecoration: 'none', color: 'black' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={Image} alt="" style={{ width: '25%', height: '50px', marginRight: '10px' }} />
      <Typography variant="h6" noWrap>
        InfraDAO
      </Typography>
    </div>
  </a>
  );

  endContent = (
    <>
      <Button label="Submit project" icon="pi pi-plus" className="mr-2" onClick={this.GoToSubmit} />
      <Button label="View" icon="pi pi-image" className="mr-2" onClick={this.GoToView} />
      <SplitButton label="DAO Members" icon="pi pi-view" model={this.items} className="mr-2"></SplitButton>
      <Button label="Dex" className="mr-2" onClick={this.GoToDexPage} />
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
