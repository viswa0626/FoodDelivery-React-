import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/productCard/ProductCard';
import { Link, useNavigate } from 'react-router-dom';
import './AdminProducts.css'
import axios from 'axios';


const AdminProducts = () => {


    //TODO: write usestate 
    const [adminProducts, setAdminProducts] = useState([]);
    //TODO: write useeffect 

    useEffect(() => {
        axios.get("https://localhost:44364/api/Products").then((value) => {
            setAdminProducts(value.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [setAdminProducts])
    function deleteProduct(id) {
        var proList = adminProducts;
        console.log(id)
        axios.delete(`https://localhost:44364/api/Products/${id}`).then((value) => {
            console.log(value);
            proList.filter(function (letter) {
                return letter["productId"] !== id;
            });
            setAdminProducts(proList)
        }).catch((error) => {
            console.log(error)
        })
    }
    console.log(adminProducts)
    const navigate = useNavigate();
    function navigateToEdit() {
        navigate('/editProduct', {
            id: "hello"
        })
    }
    return (
        <div className='admin-products'>
            {adminProducts.map((a) =>
                <ProductCard
                    key={a["productId"]}
                    productId={a["productId"]}
                    image={a["productImage"]}
                    title={a['name']}
                    des={a["productDescription"]}
                    qty={a["quantity"]}
                    price={a["price"]}
                    editonClick={() => {
                        navigate('/editProduct', {
                            replace: true, state: {
                                productId: a["productId"],
                                productName: a['name'],
                                productImage: a['productImage'],
                                productDesc: a['productDescription'],
                                productQuantity: a['quantity'],
                                productPrice: a['price']
                            }
                        })
                    }
                    }
                    deleteonClick={() => deleteProduct(a["productId"])}
                />
            )
            }
        </div>
    )
}

export default AdminProducts



// const products = [
//     {
//         "id": 1,
//         "image": "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "title": "Biryani",
//         "des": "Tasty and spicy",
//         "qty": 1,
//         "price": 250
//     },
//     {
//         "id": 2,
//         "image": "https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "title": "Rice",
//         "des": "Tasty and spicy",
//         "qty": 1,
//         "price": 165
//     },
//     {
//         "id": 3,
//         "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "title": "Rolls",
//         "des": "Tasty and spicy",
//         "qty": 1,
//         "price": 80
//     },
//     {
//         "id": 4,
//         "image": "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "title": "Pizza",
//         "des": "Tasty and spicy",
//         "qty": 1,
//         "price": 170
//     },
//     {
//         "id": 5,
//         "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "title": "Burger",
//         "des": "Tasty and spicy",
//         "qty": 1,
//         "price": 133
//     },
//     {
//         "id": 6,
//         "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "title": "Burger",
//         "des": "Tasty and spicy",
//         "qty": 1,
//         "price": 133
//     },
//     {
//         "id": 7,
//         "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "title": "Burger",
//         "des": "Tasty and spicy",
//         "qty": 1,
//         "price": 133
//     }, {
//         "id": 8,
//         "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "title": "Burger",
//         "des": "Tasty and spicy",
//         "qty": 1,
//         "price": 133
//     }, {
//         "id": 9,
//         "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "title": "Burger",
//         "des": "Tasty and spicy",
//         "qty": 1,
//         "price": 133
//     }, {
//         "id": 10,
//         "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "title": "Burger",
//         "des": "Tasty and spicy",
//         "qty": 1,
//         "price": 133
//     }, {
//         "id": 11,
//         "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "title": "Burger",
//         "des": "Tasty and spicy",
//         "qty": 1,
//         "price": 133
//     },
// ];