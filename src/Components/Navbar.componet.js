import React from 'react';
//import { useRouter } from 'next/router';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';

import Image from './Assets/ai.jpg'

class Navbar extends React.Component {
    //const router = useRouter();
    GoBackHome(){
        window.location.href = "/"
    }
    GoToSUbmit(){
        window.location.href = '/submit'
    }
    GoToView(){
        window.location.href = '/user/view-projects'
    }
    GoToDexPage(){
        window.location.href = '/dex-page'
    }

    items = [
        {
            label: 'DAO MEmbers',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = '/member/view-projects'
            }
        },
        {
            label: 'Join DAO',
            icon: 'pi pi-refresh',
            command: () => {
                window.location.href = '/joinDAO'
            }
        },
    ];

    startContent = (
        <React.Fragment>
            {/* <Button label="Home" icon="pi pi-home" className="p-button-outlined"  onClick={this.GoBackHome}/> */}
            <Button className="p-button-text" onClick={this.GoBackHome} style={{width:"290px"}}>
                <img src={Image} alt='' style={{width:"28%", height:"12.5%", borderRadius:"25%"}}/>
                <h2>InfraDAO</h2>
            </Button>

            {/* <div onClick={this.GoBackHome} style={{cursor:"pointer", gap:"14px" }}>
                <img src={Image} alt='' style={{ width: '10%', height: '5%', borderRadius: '25%' }} />
                <h2>InfraDAO</h2>
            </div> */}
        </React.Fragment>
    );

    endContent = (
        <React.Fragment>
           
            <Button label="Submit project" icon="pi pi-plus" className="mr-2" onClick={this.GoToSUbmit}/>
            <Button label="View" icon="pi pi-image" className="mr-2" onClick={this.GoToView} />
            <SplitButton label="DAO Members" icon="pi pi-view" model={this.items} className="mr-2"></SplitButton>
            <Button label="Dex" className="mr-2" onClick={this.GoToDexPage} />
        </React.Fragment>
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
