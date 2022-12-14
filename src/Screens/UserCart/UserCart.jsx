import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserCart.css";
import { Link } from "react-router-dom";
import { userCartItemList } from "../UserProducts/UserProducts";

const UserCart = (props) => {
  const [cartItems, setCartItems] = useState(props.userProList)
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cartItems.filter((item) => item['productId'] !== id);
    // setCart(arr);
    setCartItems(arr);
    userCartItemList = arr;
    // userCartItemList = userCartItemList.filter((item) => item['productId'] !== id);

  };

  const handlePrice = () => {
    let ans = 0;
    cartItems.map((item) => (ans += item["quantity"] * item["price"]));
    setPrice(ans);
  };
  // const handleChange = (item,d) => {
  //   const ind = cartItems.indexOf(item);
  //   const arr = cartItems;
  //   arr[ind].amount+=d;
  //   if (arr[ind].amount === 0) arr[ind].amount =1;
  //   setCartItems([...arr]);

  // userCartItemList.map((item) => (ans += item["quantity"] * item["price"]));
  // setPrice(ans);
  //};

  function incQuanty(id) {
    const item = cartItems.filter(it => it['productId'] === id);
    console.log("inc qty is click")
    console.log(item[0])
    if (item[0]['quantity'] > 0) {
      console.log("this was running")
      item[0]['quantity'] = parseInt(item[0]['quantity']) + 1;
      setCartItems(...[...item[0]]);

    }

  }
  function decQuantity(id) {

  }


  useEffect(() => {
    handlePrice();
    getCartItems();
  });
  async function getCartItems() {
    await axios.get(`https://localhost:44364/api/Cart/3`).then((value) => {
      //todo: check response and add cart items in this place
      console.log(value);
      // setCartItems()

    }).catch((error) => { console.log(error) })
  }

  return (
    <div className="aml_cart_item">
      {cartItems.map((item) => (
        <div className="aml_cart_box" key={item['productId']}>
          <div className="aml_cart_img">
            <img src={item['productImage']} alt="" />
            <p>{item['name']}</p>
          </div>
          <div>
            <button onClick=
              {() => incQuanty(item['productId'])

                //() => (cartItems)
                //handleChange(item, 1)


              }>+</button>

            <button>{item['quantity']}</button>
            <button onClick={() => (cartItems)
              //handleChange(item, -1)


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
        <button variant='primary' style={{ backgroundColor: "#581845", borderRadius: '20px', border: '3px solid black', width: 140, height: 100, padding: 20, color: "white", marginLeft: 100, marginRight: 80, fontWeight: 'bold', fontSize: 18 }}>
          <Link to='/addpay'>Place Order</Link></button>
      </div>
    </div>
  );
};



export default UserCart;