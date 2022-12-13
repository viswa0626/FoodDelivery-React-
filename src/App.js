import logo from "./logo.svg";
import "./App.css";
import Login from "../src/Screens/userLogin/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userhome from "../src/Screens/userHome/Userhome";
import Ownerregisteration from "../src/Screens/adminSignup/Ownerregisteration";
import Customerregisteration from "../src/Screens/userSignup/Customerregistration";
import AdminHome from "./Screens/adminHome/AdminHome";
import PopupScreen from "./Components/Popup/PopupScreen";
import AdminLogin from "./Screens/AdminLogin/AdminLogin";
import EditProduct from "./Screens/adminAddProduct/EditProduct";
import { AddPayModal } from "./Screens/UserPayment/AddPayModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<PopupScreen />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/userHome" element={<Userhome />} />
        <Route path="/userregis" element={<Customerregisteration />} />
        <Route path="/registry" element={<Ownerregisteration />} />
        <Route path="/editProduct" element={<EditProduct />} />

        <Route path="/admin" element={<AdminHome />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/addpay" element={<AddPayModal/>} />

        {/* <Route path='/' element={<UserDashboard/>} exact />
      <Route path='/About' element={<ABOUT/>} exact />
      <Route path='/FAQs' element={<FAQs/>} exact />
      <Route path='/Starter' element={<Starter/>} exact />
      <Route path='/AddPayModal' element={<AddPayModal/>} exact />
      <Route path='/Payment' element={<Payment/>} exact /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
