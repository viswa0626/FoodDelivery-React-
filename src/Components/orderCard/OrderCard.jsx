import React from 'react';
import './OrderCard.css'

const OrderCard = (props) => {
    
    return (
        <div className='o-card'>
            <img className='o-image' src={props.image} />

            <div className='o-details'>
                <p className='pr-title' >{props.title}</p>
                <p className='des'>{props.des}</p>
                <p className='des'>{props.name}</p>
                <p className='des'>{props.location}</p>
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

export default OrderCard