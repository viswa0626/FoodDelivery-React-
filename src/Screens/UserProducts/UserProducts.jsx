import React, { useState, useEffect } from "react";
import UserProCard from "../../Components/UserProCard/UserProCard";
import "./UserProducts.css";
import axios from "axios";


export const userCartItemList = [];

const UserProducts = () => {

    //TODO: write usestate 
    const [userProducts, setUserProducts] = useState([]);
    //TODO: write useeffect 

    useEffect(() => {
        axios.get("https://localhost:44364/api/Products").then((value) => {
            setUserProducts(value.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [setUserProducts])


    return (
        <div className="aml_products">
            {userProducts.map((productItem) => (
                <UserProCard
                    key={productItem['productId']}
                    name={productItem['name']}
                    img={productItem['productImage']}
                    price={productItem['price']}
                    addToCart={() => {
                        userCartItemList.push(
                            {
                                "productId": productItem['productId'],
                                "name": productItem['name'],
                                "productImage": productItem['productImage'],
                                "price": productItem['price'],
                                "quantity": 1
                            }
                        )
                    }}
                />
            ))}
        </div>
    );
}
export default UserProducts;