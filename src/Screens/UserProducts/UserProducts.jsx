import React from "react";
import "./UserProducts.css";

const productItems = [

    {

        id: "1",

        name: "Biriyani",

        price: 350,

        image: "./Pics/item1.jpg"

    },

    {

        id: "2",

        name: " non-veg Meals",

        price: 230,

        image: "./Pics/item2.jpg"

    },

    {

        id: "3",

        name: "veg meals",

        price: 170,

        image: "./Pics/item3.jpg"

    },
    {

        id: "4",

        name: "Chicken Biriyani",

        price: 250,

        image: "./Pics/item4.jpg"

    },

    {

        id: "5",

        name: "Roti",

        price: 30,

        image: "./Pics/item5.jpg"

    },

    {

        id: "6",

        name: "Gobi Meals",

        price: 50,

        image: "./Pics/item6.jpg"

    },

    {

        id: "7",

        name: "veg Manchurian",

        price: 65,

        image: "./Pics/item7.jpg"

    },

    {

        id: "8",

        name: "Dosa",

        price: 35,

        image: "./Pics/item8.jpg"

    },

    {
        id: "9",
        name: "Idli",
        price: 75,
        image: "./Pics/item9.jpg"
    },

]


const UserProducts = (handleAddProduct) => {
    return (
        <div className="aml_products">
            {productItems.map((productItem) => (
                <div className="aml_card">
                    <div>
                        <img
                            className="aml_product-image"
                            src={productItem.image}
                            alt={productItem.name}
                        />
                    </div>
                    <div>
                        <h3 className="aml_product.name">
                            {productItem.name}
                        </h3>
                    </div>
                    <div className="aml_product-price">Rs:{productItem.price}</div>
                    <div>
                        <button className="aml_product-add-button"
                            onClick={() => handleAddProduct(productItem)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default UserProducts;