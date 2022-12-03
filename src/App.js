import logo from './logo.svg';
import './App.css';
import Login from '../src/Screens/userLogin/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userhome from '../src/Screens/userHome/Userhome';
import Ownerregisteration from '../src/Screens/adminSignup/Ownerregisteration'
import Customerregisteration from '../src/Screens/userSignup/Customerregistration';

function App() {
  return (
    

      <BrowserRouter>
      
      <Routes>

      
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Userhome />} />
        <Route path="/registry" element={<Ownerregisteration />} />
        <Route path="/regis" element={<Customerregisteration />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
