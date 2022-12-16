import React,{useState, useEffect} from 'react';
import OrderCard from '../../Components/orderCard/OrderCard';
import './AdminOrders.css'
import axios from 'axios';

const AdminOrders = () => {
  const [adminOrders, setAdminOrders] = useState([]);
  //TODO: write useeffect 

  useEffect(() => {

    axios.get("https://localhost:44364/api/Orders").then((value) => {

      setAdminOrders(value.data)
      // console.log(value);
      // console.log(adminProducts);
    }).catch((error) => {
      console.log(error)
    })

  }, [setAdminOrders])

  console.log(adminOrders)
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
      {adminOrders.map(a => <OrderCard 
      key={a['orderDetailsId']} 
      image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fthank-you-for-your-order&psig=AOvVaw3RDS7uMvkHrCU9EulQTr9m&ust=1671262291525000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCt5qvP_fsCFQAAAAAdAAAAABAE" 
      // image={a['image']} 
      title={a['itemName']} 
      name={a['userName']} 
      location={a['userAddress']} 
      qty={a['quantity']} 
      des={'des'} 
      // des={a['des']} 
      price={a['totalCost'] * a['quantity']} />)}


    </div>
  )
}

export default AdminOrders