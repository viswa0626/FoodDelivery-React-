import React from 'react';
import './PopupScreen.css';
import EditAddProduct from '../../Screens/adminAddProduct/EditAddProduct.jsx'
import { FaCross, FaWindowClose } from 'react-icons/fa';

const PopupScreen = ({ isYesOrNo,yesOnClick, noOnclick, closeOnClick }) => {
  return (
    <div className='popup_screen'>
      <FaWindowClose onClick={closeOnClick} className='close_icon' />
      <div className='popup_content'>
        register successfully
      </div>
      <div className='sized-box'></div>
      {isYesOrNo && <div className='popup_btn_con'><button onClick={yesOnClick} className='popup_btn'>yes</button><button onClick={noOnclick} className='popup_btn'>No</button></div>}

    </div>
  )
}

export default PopupScreen