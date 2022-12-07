import React, { useState } from 'react'
import './AddProduct.css';
import EditAddProduct from './EditAddProduct';

const AddProduct = () => {
    return (
        <div className='adding_product_screen'>

            <EditAddProduct />
        </div>
    )
}


export default AddProduct

export { EditAddProduct };