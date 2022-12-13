import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserCart.css";
import { Link } from "react-router-dom";
import { userCartItemList } from "../UserProducts/UserProducts";

const UserCart = () => {
  const [cartItems, setCartItems] = useState([])
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = userCartItemList.filter((item) => item['productId'] !== id);
    // setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    userCartItemList.map((item) => (ans += item["quantity"] * item["price"]));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
    getCartItems();
  });
  async function getCartItems(){
   await axios.get(`https://localhost:44364/api/Cart/3`).then((value) => {
    //todo: check response and add cart items in this place
    console.log(value);
    // setCartItems()

   }).catch((error) => {console.log(error)})
  }

  return (
    <div className="aml_cart_item">
      {userCartItemList.map((item) => (
        <div className="aml_cart_box" key={item['productId']}>
          <div className="aml_cart_img">
            <img src={item['productImage']} alt="" />
            <p>{item['name']}</p>
          </div>
          <div>
            <button onClick={() => {
              // handleChange(item, 1)

            }
            }>+</button>
            <button>{item['quantity']}</button>
            <button onClick={() => {
              //  handleChange(item, -1)

            }
             }>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item['productId'])}>Remove</button>
          </div>
        </div>
      ))}
      <div className="aml_total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
        <button variant='primary' style={{backgroundColor:"#581845",borderRadius:'20px', border:'3px solid black', width:140, height:100, padding:20, color:"white", marginLeft:100, marginRight:80, fontWeight:'bold', fontSize:18}}>
          <Link to='/addpay'>Place Order</Link></button>
      </div>
    </div>
  );
};

export default UserCart;