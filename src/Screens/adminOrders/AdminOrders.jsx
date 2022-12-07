import React from 'react';
import OrderCard from '../../Components/orderCard/OrderCard';
import './AdminOrders.css'

const AdminOrders = () => {
  const orders = [
    {
      "id": 1,
      "image": "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Biryani",
      "name": "Anupama",
      "location": "Marthalli",
      "des": "Tasty and spicy",
      "qty": 2,
      "price": 250
    },
    {
      "id": 2,
      "image": "https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Rice",
      "name": "Amulaya",
      "location": "jaynagar",
      "des": "Tasty and spicy",
      "qty": 5,
      "price": 165
    },
    {
      "id": 3,
      "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Roles",
      "name": "Viswa",
      "location": "Kundanahalli",
      "des": "Tasty and spicy",
      "qty": 3,
      "price": 80
    },
    {
      "id": 4,
      "image": "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Pizza",
      "name": "Nikitha",
      "location": "Banglore",
      "des": "Tasty and spicy",
      "qty": 2,
      "price": 170
    },
    {
      "id": 5,
      "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Burger",
      "name": "Pallavi",
      "location": "Krishrajupuram",
      "des": "Tasty and spicy",
      "qty": 1,
      "price": 133
    }
  ];
  return (
    <div className='admin-orders'>
      {orders.map(a => <OrderCard key={a['id']} image={a['image']} title={a['title']} name={a['name']} location={a['location']} des={a['des']} qty={a['qty']} price={a['price'] * a['qty']} />)}


    </div>
  )
}

export default AdminOrders