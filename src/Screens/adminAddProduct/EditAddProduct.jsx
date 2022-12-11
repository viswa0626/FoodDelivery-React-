import React, { useState } from 'react';
import './AddProduct.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom"


const EditAddProduct = (props) => {

    const [name, setName] = useState(props.name);
    const [pImage, setpImage] = useState(props.pImage);
    const [desc, setDesc] = useState(props.desc);
    const [quantity, setQuantity] = useState(props.quantity);
    const [price, setPrice] = useState(props.price);
    const navigate = useNavigate();

    const navigateToProductpage = () => {
        navigate('/admin');
    };

    async function onSubmitForm(event) {
        event.preventDefault();
        props.isEdit ? editPro() : addPro()

    }

    async function addPro() {
        await axios.post("https://localhost:44364/api/Products", {
            productId: 0,
            name: name.toString().trim(),
            price: parseInt(price.toString().trim()),
            quantity: parseInt(quantity.toString().trim()),
            categoryId: parseInt(1),
            productImage: pImage.toString().trim(),
            productDescription: desc.toString().trim(),
            isAvailable: 0
        })
            .then((a) => {
                console.log(a);
                setName("");
                setpImage("");
                setDesc("");
                setQuantity("");
                setPrice("");
            }).catch((e) => {
                console.log(e)
            })
    }
    async function editPro() {
        await axios.put(`https://localhost:44364/api/Products/${parseInt(props.productId)}`, {
            productId: parseInt(props.productId),
            name: name.toString().trim(),
            price: parseInt(price.toString().trim()),
            quantity: parseInt(quantity.toString().trim()),
            categoryId: parseInt(1),
            productImage: pImage.toString().trim(),
            productDescription: desc.toString().trim(),
            isAvailable: 0
        })
            .then((a) => {
                console.log(a);
                setName("");
                setpImage("");
                setDesc("");
                setQuantity("");
                setPrice("");
                navigateToProductpage()
            }).catch((e) => {
                console.log(e)
            })
    }

    return (
        <div className='add_product_screen'>
            <div className='add_product'>

                <div><h1>{props.isEdit ? "Edit Product" : "Add Product"}</h1></div>
                <form onSubmit={onSubmitForm} className='form'>
                    <div className='add_text_field'>
                        <label className='add_label'>Item Name</label>
                        <input className='add_input_text' onChange={(a) => setName(a.target.value)} value={name} type="text" placeholder='  Enter Item' name="uname" required></input>
                    </div>
                    <div className='add_text_field'>
                        <label className='add_label'>Image</label>
                        <input className='add_input_text' onChange={(a) => setpImage(a.target.value)} value={pImage} type="text" placeholder='  Enter Item' name="uname" required></input>
                    </div>
                    <div className='add_text_field'>
                        <label className='add_label'>Description</label>
                        <input className='add_input_text' onChange={(a) => setDesc(a.target.value)} value={desc} type="text" placeholder='  Enter description' name="uname" required></input>
                    </div>
                    <div className='add_text_field'>
                        <label className='add_label'>Quantity</label>
                        <input className='add_input_text' onChange={(a) => setQuantity(a.target.value)} value={quantity} type="number" placeholder='  Enter quantity' name="uname" required></input>
                    </div>
                    <div className='add_text_field'>
                        <label className='add_label'>price</label>
                        <input className='add_input_text' onChange={(a) => setPrice(a.target.value)} value={price} type="number" placeholder='  Enter price' name="uname" required></input>
                    </div>
                    <button className='add_button'>{props.isEdit ? "Edit Product" : "Add Product"}</button>
                </form>

            </div>
            <div className='review_product'>
                <div className='sizebox_h'></div>
                <div><h1>Review Product</h1></div>
                <img className='rev_image' src={pImage} alt="Image" />
                <div><span>Name : </span><span className='rev_label'>{name}</span></div>
                <div><span>Description : </span><span className='rev_label'>{desc}</span></div>
                <div><span>Quantity : </span><span className='rev_label'>{quantity}</span></div>
                <div><span>Price : </span><span className='rev_label'>{price}</span></div>
                <div className='sizebox_h'></div>
            </div>
        </div>
    )
}

export default EditAddProduct