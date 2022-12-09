import React from "react";
import "./UserCart.css";

const cartItems = [
  {
    "image": "",
    "name": "Biryani",
    "quantity": 3,
    "price": 5
  }
]

const UserCart = () => {
  var totalPrice = cartItems.reduce((price, item) => price + item["quantity"] * item["price"], 0)

  return (
    <div className="aml_cart-items">
      <h2 className="aml_cart-items-header">Cart Items</h2>
      <div className="aml_clear-cart">
        {cartItems.length >= 1 && (
          <button className="aml_clear-cart-button" onClick={() => { }}>
            Clear Cart</button>
        )}
      </div>

      {cartItems.length === 0 && (
        <div className="aml_cart-items-empty">No items are added.</div>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="aml_cart-items-list">
            <img className="aml_cart-items-image"
              src={item["image"]}
              alt={item["name"]}
            />
            <div className="aml_cart-items-name">{item["name"]}</div>
            <div className="aml_cart-items-function">
              <button className="aml_cart-items-add" onClick={() => { }}>+</button>
              <button className="aml_cart-items-remove" onClick={() => { }}>-</button>
            </div>
            <div className="aml_cart-items-price">
              Qty: {item["quantity"]} * Rs: {item["price"]}
            </div>
          </div>

        ))}
      </div>
      <div className="aml_cart-items-total-price-name">
        Total price
        <div className="aml_cart-Items-total-price"> Rs:{totalPrice}</div>
      </div>
    </div>
  );
};

export default UserCart;
