import React from 'react';
import './ProductCard.css'

const ProductCard = () => {
    return (
        <div className='p-card'>
            <img className='pro-image' src="https://media.istockphoto.com/id/996699224/photo/assorted-indian-food-for-lunch-or-dinner-rice-lentils-paneer-dal-makhani-naan-chutney-spices.jpg?s=612x612&w=is&k=20&c=Bjdls52hMQSG4x0RoAUcWqJSczDfQU0Gqp9Gya7xHNk=" />

            <div className='pro-details'>
                <p className='pr-title' >Title</p>
                <p className='des'>description</p>
                <div className='qty-pr'>
                    <div>

                        <p className='qty'>quantity</p>
                        <p className='qty'>10</p>
                    </div>
                    <div>

                        <p className='price'>cost</p>
                        <p className='price'>200</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard