import React from 'react'
import EditAddProduct from './EditAddProduct'
import './AddProduct.css'
import { useLocation, useParams } from 'react-router';

const EditProduct = (props) => {
    const params = useParams;
    const location = useLocation();

    console.log('params', params)
    console.log('location', location.state)
    console.log(props);
    console.log(props.price);
    return (
        <div className='ed_edit_product'>
            <EditAddProduct
                productId={location.state['productId']}
                name={location.state['productName']}
                pImage={location.state['productImage']}
                desc={location.state['productDesc']}
                quantity={location.state['productQuantity']}
                price={location.state['productPrice']}
                isEdit={true} />
        </div>
    )
}

export default EditProduct