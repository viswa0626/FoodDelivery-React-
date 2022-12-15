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
      image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQRERQSERAXFhQXFhgTExcWERcRFhgYGRMXGBcXFhcZHiouGRwnHxYWIzQjJystMDAwGSE2OzYvOiovMC0BCwsLDw4PHBERGy8oIigxLy8tLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAOkA2AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EAEMQAAIBAgQDBAcEBggHAAAAAAECAAMRBAUSIQYTMSJBUWEycYGRobHBFCNS8GJjcrLR4QckNEJUotLxFRYzU3ODwv/EABoBAQADAQEBAAAAAAAAAAAAAAACAwQBBQb/xAAvEQACAgECBAQFAwUAAAAAAAAAAQIRAxIhBDFBUWFxkfAigaGx0RMUwSMyM0Lh/9oADAMBAAIRAxEAPwD7jERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBMGZkJnWNxNNrYfDq66bl2ewHiLTjdE4Qc3Sr5uiavEoWU8U4zFOadNKAYDV2lcbXt+PfrLXlNPEAN9pemxNivLUrbxBud5GE1LkXZ+Fng2m1fa9ySia6tQKpYmwAufUJz5dmNOumumbgHSbixB9XtEk5K6sz6XV0dkXmnFYlaal3NlHWMNiFqKHQ3B6Gc1K9N79hpdXWxuvE562MRGCsbE/nedEKSbaT5BpoTM52xKhwhPaPScS5ypr8gKb9NXde15z9SPK+tfM49uZKxI7Ocw5FPWF1EkKBe3X/adOCr8ymr2tqANp3Urrqcvob5maK2IRCA7qpY2W5AufAX6me6jhQSTYAXPqkhZsiROV57RxBK0mNxvYqVJHiL9Z14/H06Ka6tRUW9rsbb+A8T5QcjKMlaZ1xIzL88w+IYrSrK7DcqDY+49ZJwSsREQBERAEREAREQBNOI9Bv2T8pumqv6Leo/KAfNP6Pj/AFy36D/MS4VM/IxYw4QabhS1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" 
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