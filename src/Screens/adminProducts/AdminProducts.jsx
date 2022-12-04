import React from 'react';
import ProductCard from '../../Components/productCard/ProductCard';
import './AdminProducts.css'



const AdminProducts = () => {

    const products = [
        {
            "id": 1,
            "image": "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Biryani",
            "des": "Teasy and speciy",
            "qty": 50,
            "price": 250
        },
        {
            "id": 2,
            "image": "https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Rice",
            "des": "Teasy and speciy",
            "qty": 22,
            "price": 165
        },
        {
            "id": 3,
            "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Roles",
            "des": "Teasy and speciy",
            "qty": 80,
            "price": 80
        },
        {
            "id": 4,
            "image": "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Pizza",
            "des": "Teasy and speciy",
            "qty": 32,
            "price": 170
        },
        {
            "id": 5,
            "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Burger",
            "des": "Teasy and speciy",
            "qty": 12,
            "price": 133
        }
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