import React, {useRef} from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { SplitButton } from 'primereact/splitbutton';
import { Toolbar } from 'primereact/toolbar';
import { useNavigate } from 'react-router-dom';
import { MetaMaskSDK } from '@metamask/sdk';

function Navbar() {
  const navigate = useNavigate();
  const toast  = useRef(null)

  const goToMemeberView = () =>{
    const MMSDK = new MetaMaskSDK();
    const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum
    ethereum.request({ method: 'eth_requestAccounts', params: [] }).then((data) => {
      toast.current.show({severity:'success', summary: 'Connected', detail:`'successfully connected to wallet' `, life: 3000});
      navigate('/member/view-projects');
    }).catch((error) => {
      toast.current.show({severity:'error', summary: 'Error', detail:'Can not diplay the page until user is connected', life: 3000});
    })
  }

  function GoBackHome() {
    navigate("/");
  }

  function GoToSubmit() {
    const MMSDK = new MetaMaskSDK();

    const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum
    ethereum.request({ method: 'eth_requestAccounts', params: [] }).then((data) => {
      toast.current.show({severity:'success', summary: 'Connected', detail:`'successfully connected to wallet' `, life: 3000});
      navigate("/submit");
    }).catch((error) => {
      toast.current.show({severity:'error', summary: 'Error', detail:'Can not diplay the page until user is connected', life: 3000});
    })
    
  }

  function GoToView() {
    navigate('/user/view-projects');
  }

  function GoToDexPage() {
    const MMSDK = new MetaMaskSDK();

    const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum
    const accounts = ethereum
    ethereum.request({ method: 'eth_requestAccounts', params: [] }).then((data) => {
      toast.current.show({severity:'success', summary: 'Connected', detail:`'successfully connected to wallet' ${accounts[0]}`, life: 3000});
      navigate('/dex-page');
    }).catch((error) => {
      toast.current.show({severity:'error', summary: 'Error', detail:'Can not diplay the page until user is connected', life: 3000});
    })
    
  }
  function GoToProfilePage() {
    const MMSDK = new MetaMaskSDK();

    const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum
    ethereum.request({ method: 'eth_requestAccounts', params: [] }).then((data) => {
      toast.current.show({severity:'success', summary: 'Connected', detail:`'successfully connected to wallet' `, life: 3000});
      navigate('/profile');
    }).catch((error) => {
      toast.current.show({severity:'error', summary: 'Error', detail:'Can not diplay the page until user is connected', life: 3000});
    })
    
  }

  let items = [
    {
      label: 'Pending Projects',
      icon: 'pi pi-external-link',
      command: () => {
        goToMemeberView()
      }
    },
    {
      label: 'Join DAO',
      icon: 'pi pi-refresh',
      command: () => {
        navigate('/joinDAO');
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

    return (
      <div className="card">
        <Toast ref={toast} />
        <Toolbar start={startContent} end={endContent} />
      </div>
    );
}

export default Navbar;