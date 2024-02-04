import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Orgslist from './Orgslist';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Route and Switch
<<<<<<< HEAD
=======
import WicsOrgPage from './WicsOrgPage';
import MojoDojoOrgPage from './MojoDojoOrgPage';
import RateForm from './RateForm';
>>>>>>> 90c0bbf65799204cb6a19ca83166dc98243a9e46

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={(<Homepage />)} />
          <Route path='/orgs' element={(<Orgslist/>)}/>
<<<<<<< HEAD
=======
          <Route path='/wics-org' element={(<WicsOrgPage/>)}/>
          <Route path='/mojo-dojo-org' element={(<MojoDojoOrgPage/>)}/>
          <Route path='/rateform' element={(<RateForm/>)}/>
>>>>>>> 90c0bbf65799204cb6a19ca83166dc98243a9e46
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
