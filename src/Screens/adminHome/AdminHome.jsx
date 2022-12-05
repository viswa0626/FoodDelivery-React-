import React, { useState } from 'react';
import SideNavBar from '../../Components/sideNavBar/SideNavBar';
import AddProduct from '../adminAddProduct/AddProduct';
import AdminOrders from '../adminOrders/AdminOrders';
import AdminProducts from '../adminProducts/AdminProducts';
import './AdminHome.css'

const AdminHome = () => {
    const [index, setIndex] = useState(0);
   
    return (
        <div className='admin'>
            <div className='left'>
                <SideNavBar sendIndex={(a) => {

                    setIndex(a);
                    console.log(a);
                }} />
            </div>


            {/* <div className='ad_right'> */}
                {
                    index === 0 ? <AdminProducts /> : index === 1 ? <AdminOrders /> : <AddProduct />
                }
            {/* </div> */}


        </div>
    )
}

export default AdminHome