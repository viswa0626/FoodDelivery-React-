import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userhome from './Screens/Userhome';
import Ownerregisteration from './Components/Ownerregisteration'
import Customerregisteration from './Components/Customerregistration';

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
