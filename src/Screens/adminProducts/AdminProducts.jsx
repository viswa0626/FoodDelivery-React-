import React from 'react';
import ProductCard from '../../Components/productCard/ProductCard';
import './AdminProducts.css'



const AdminProducts = () => {

    const products = [
        {
            "id": 1,
            "image": "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Biryani",
            "des": "Tasty and spicy",
            "qty": 1,
            "price": 250
        },
        {
            "id": 2,
            "image": "https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Rice",
            "des": "Tasty and spicy",
            "qty": 1,
            "price": 165
        },
        {
            "id": 3,
            "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Rolls",
            "des": "Tasty and spicy",
            "qty": 1,
            "price": 80
        },
        {
            "id": 4,
            "image": "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Pizza",
            "des": "Tasty and spicy",
            "qty": 1,
            "price": 170
        },
        {
            "id": 5,
            "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Burger",
            "des": "Tasty and spicy",
            "qty": 1,
            "price": 133
        },
        {
            "id": 6,
            "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Burger",
            "des": "Tasty and spicy",
            "qty": 1,
            "price": 133
        },
        {
            "id": 7,
            "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Burger",
            "des": "Tasty and spicy",
            "qty": 1,
            "price": 133
        }, {
            "id": 8,
            "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Burger",
            "des": "Tasty and spicy",
            "qty": 1,
            "price": 133
        }, {
            "id": 9,
            "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Burger",
            "des": "Tasty and spicy",
            "qty": 1,
            "price": 133
        }, {
            "id": 10,
            "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Burger",
            "des": "Tasty and spicy",
            "qty": 1,
            "price": 133
        }, {
            "id": 11,
            "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Burger",
            "des": "Tasty and spicy",
            "qty": 1,
            "price": 133
        },




    ];
    return (
        <div className='admin-products'>
            {products.map((a) =>
                <ProductCard key={a["id"]} image={a["image"]} title={a['title']} des={a["des"]} qty={a["qty"]} price={a["price"]} />
            )
            }
        </div>
    )
}

export default AdminProducts