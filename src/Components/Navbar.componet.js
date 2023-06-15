import React from 'react';
//import { useRouter } from 'next/router';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';

class Navbar extends React.Component {
    //const router = useRouter();
    GoBackHome(){
        window.location.href = "/"
    }
    GoToSUbmit(){
        window.location.href = '/submit'
    }
    GoToView(){
        window.location.href = '/view-projects'
    }
    GoToJoinDAO(){
        window.location.href = '/joinDAO'
    }
    GoToDexPage(){
        window.location.href = '/dex-page'
    }

    items = [
        {
            label: 'DAO MEmbers',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = '/view-projects'
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
            <Button label="Home" icon="pi pi-home" className="p-button-success"  onClick={this.GoBackHome}/>
        </React.Fragment>
    );

    endContent = (
        <React.Fragment>
           
            <Button label="Submit project" icon="pi pi-plus" className="mr-2" onClick={this.GoToSUbmit}/>
            <Button label="View" icon="pi pi-image" className="mr-2" onClick={this.GoToView} />
            <Button label="Dex" className="mr-2" onClick={this.GoToDexPage} />
            <SplitButton label="DAO Members" icon="pi pi-view" model={this.items} className="mr-2"></SplitButton>
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
