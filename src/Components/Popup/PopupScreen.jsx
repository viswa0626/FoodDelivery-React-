import React from 'react';
import './PopupScreen.css';
import EditAddProduct from '../../Screens/adminAddProduct/EditAddProduct.jsx'

const PopupScreen = () => {
  return (
    <div className='popup_screen'>
      <div className='close_icon'>wrong</div>
      <div className='popup_content'>
        <EditAddProduct />

      </div>
    </div>
  )
}

export default PopupScreen