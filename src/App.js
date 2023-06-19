import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/user/view-projects' element={<Viewprojects/>}/>
          <Route path='/member/view-projects' element={<Viewprojects/>}/>
          <Route path='/submit' element={<SubmitProject/>}/>
          <Route path='/user/view-the-project' element={<ViewProject/>}/>
          <Route path='/member/view-the-project' element={<ViewProject/>}/>
          <Route path='/joinDAO' element={<JoinDAO/>} />
          <Route path='/dex-page' element={<DexPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
