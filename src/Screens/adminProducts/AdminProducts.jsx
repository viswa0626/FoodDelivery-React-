import React from 'react';
import ProductCard from '../../Components/productCard/ProductCard';
import './AdminProducts.css'

const AdminProducts = () => {
    return (
        <div className='admin-products'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default AdminProducts