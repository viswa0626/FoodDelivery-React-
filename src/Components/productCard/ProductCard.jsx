import React from 'react';
import './ProductCard.css'

const ProductCard = (props) => {
    return (
        <div className='p-card'>
            <img className='pro-image' src={props.image} />

            <div className='pro-details'>
                <p className='pr-title' >{props.title}</p>
                <p className='des'>{props.des}</p>
                <div className='qty-pr'>
                    <div>

                        <p className='qty'>quantity</p>
                        <p className='qty'>{props.qty}</p>
                    </div>
                    <div>

                        <p className='price'>cost</p>
                        <p className='price'>{props.price}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard