import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userhome from './Screens/Userhome';

function App() {
  return (
    

      <BrowserRouter>
      
      <Routes>

      
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Userhome />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
