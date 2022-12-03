import React from 'react';
import './OrderCard.css'

const OrderCard = () => {
    return (
        <div className='o-card'>
            <img className='o-image' src="https://media.istockphoto.com/id/996699224/photo/assorted-indian-food-for-lunch-or-dinner-rice-lentils-paneer-dal-makhani-naan-chutney-spices.jpg?s=612x612&w=is&k=20&c=Bjdls52hMQSG4x0RoAUcWqJSczDfQU0Gqp9Gya7xHNk=" />

            <div className='o-details'>
                <p className='pr-title' >Title</p>
                <p className='des'>description</p>
                <p className='des'>username</p>
                <p className='des'>location</p>
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

export default OrderCard