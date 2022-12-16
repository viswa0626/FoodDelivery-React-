import React from 'react';
import './UserProCard.css';

const UserProCard = (props) => {
    //const { name, price, img } = item;
    return (
        <div className="aml_cards">
            <div className="aml_image_box">
                <img className='aml_image_box' src={props.img} alt="Image" />
            </div>
            <div className="aml_details">
                <p>{props.name}</p>
                <p>Price - {props.price}Rs</p>
                <button onClick={props.addToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default UserProCard