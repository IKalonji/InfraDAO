import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PolybaseProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";
import {Button} from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";            
import 'primeicons/primeicons.css';                           

import Navbar from './Components/Navbar.componet';
import Landingpage from './pages/Landing.pages';
import Viewprojects from './pages/View-projects.pages';
import SubmitProject from './pages/Submit-Project.pages';
import ViewProject from './pages/View-Project.pages';
import JoinDAO from './pages/Join-DAO.pages';
import DexPage from './pages/Dex.pages';
import ProfilePage from './pages/ProfilePage.pages';
import { AppStateService } from './AppstateService/AppState.service';

const polybase = new Polybase();

function App() {
  const service = new AppStateService();
  const [visible, setVisible] = useState(true);
  const footerContent = (
      <div>
          <Button label="Got It!" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
      </div>
  );
return (
    <div className="App">
      <PolybaseProvider polybase={polybase}>
      <BrowserRouter>

        <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
          <h4 className="m-0">
              Please ensure that you are on the Hedera Testnet,
              and that you are using the Arkhia RPC
          </h4>
        </Dialog>

        <Navbar/>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/user/view-projects' element={<Viewprojects/>}/>
          <Route path='/member/view-projects' element={<Viewprojects/>}/>
          <Route path='/submit' element={<SubmitProject/>}/>
          <Route path='/user/view-the-project' element={<ViewProject/>}/>
          <Route path='/member/view-the-project' element={<ViewProject/>}/>
          <Route path='/joinDAO' element={<JoinDAO/>} />
          <Route path='/dex-page' element={<DexPage/>}/>
          <Route path='/profile' element={<ProfilePage />}/>
        </Routes>
      </BrowserRouter>
      </PolybaseProvider>
    </div>
  );
}

export default App;
