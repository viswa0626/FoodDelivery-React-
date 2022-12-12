import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserCart.css";

const UserCart = () => {
  const [cartItems, setCartItems] = useState([])
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    // const arr = cart.filter((item) => item.id !== id);
    // setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    // cart.map((item) => (ans += item.amount * item.price));
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
      {cartItems.map((item) => (
        <div className="aml_cart_box" key={item.id}>
          <div className="aml_cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => {
              // handleChange(item, 1)

            }
            }>+</button>
            <button>{item.amount}</button>
            <button onClick={() => {
              //  handleChange(item, -1)

            }
             }>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="aml_total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </div>
  );
};

export default UserCart;
