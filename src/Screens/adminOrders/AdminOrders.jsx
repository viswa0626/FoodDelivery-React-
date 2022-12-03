import React from 'react';
import OrderCard from '../../Components/orderCard/OrderCard';
import './AdminOrders.css'

const AdminOrders = () => {
  return (
    <div className='admin-orders'>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
    </div>
  )
}

export default AdminOrders