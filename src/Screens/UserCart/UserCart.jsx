import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserCart.css";
import { Link } from "react-router-dom";
import { userCartItemList } from "../UserProducts/UserProducts";
import AddPayModal from "../UserPayment/AddPayModal";
import { mockComponent } from "react-dom/test-utils";

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

  async function placeOrder() {
    cartItems.map(async (a) => {
      //Todo: add the post api details
      await axios.post("https://localhost:44364/api/Orders", {
        
        "orderDetailsId": a.orderDetailsId,
        "orderNo": Math.floor((Math.random() * 10000) + 1).toString(),
        "productId":a.productId ,
        "quantity": parseInt(a.quantity),
        "userId": 1,
        "paymentId": Math.floor((Math.random() * 100000) + 1).toString(),
        // "orderDate": "2022-12-15T17:21:43.279Z",
        "itemName": a.itemName,
        "userName": a.userName,
        "userAddress": a.userAddress,
        "totalCost": parseInt(a.quantity)*parseInt(a.totalCost)
        // "orderDetailsId": 0,
        // "orderNo": "1134",
        // "productId": 33,
        // "quantity": 0,
        // "userId":1,
        // "status": "string",
        // "paymentId": 1,
        // "orderDate": "2022-12-15T17:21:43.279Z",
        // "itemName": "string",
        // "userName": "string",
        // "userAddress": "string",
        // "totalCost": 0
      }).then((e) => {
        console.log(a)
      }).catch((err) => {
        console.log(err)
      });
    })
  }

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
    <div className="cartScreen">


      <div className="aml_cart_item">
        <div className="cart_screen_left">
          <div className="cart_screen_left_top">
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
          </div>
          <div className="cart_screen_left_bottom">
            <div className="aml_total">
              <span>Total Price of your Cart</span>
              <span>Rs - {price}</span>
              <button variant='primary' onClick={() => placeOrder()} style={{ backgroundColor: "#581845", borderRadius: '20px', border: '3px solid black', width: 140, height: 100, padding: 20, color: "white", marginLeft: 100, marginRight: 80, fontWeight: 'bold', fontSize: 18 }}>
                <Link to='/addpay'>
                  Place Order
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="cart_screen_right">

        </div>
        {/* {cartItems.map((item) => (
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
        ))} */}
        {/* <div className="aml_total">
          <span>Total Price of your Cart</span>
          <span>Rs - {price}</span>
          <button variant='primary' style={{ backgroundColor: "#581845", borderRadius: '20px', border: '3px solid black', width: 140, height: 100, padding: 20, color: "white", marginLeft: 100, marginRight: 80, fontWeight: 'bold', fontSize: 18 }}>
            <Link to='/addpay'>Place Order</Link></button>
        </div> */}
      </div>
    </div>
  );
};



export default UserCart;