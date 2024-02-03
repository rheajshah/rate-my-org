import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Orgslist from './Orgslist';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Route and Switch

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={(<Homepage />)} />
          <Route path='/orgs' element={(<Orgslist/>)}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
