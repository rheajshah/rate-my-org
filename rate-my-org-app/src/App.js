import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Orgslist from './Orgslist';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Route and Switch
import WicsOrgPage from './WicsOrgPage';
import MojoDojoOrgPage from './MojoDojoOrgPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={(<Homepage />)} />
          <Route path='/orgs' element={(<Orgslist/>)}/>
          <Route path='/wics-org' element={(<WicsOrgPage/>)}/>
          <Route path='/mojo-dojo-org' element={(<MojoDojoOrgPage/>)}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
