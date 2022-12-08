import React from 'react';
import './ProductCard.css';
import Popup from 'reactjs-popup';
import EditAddProduct from '../../Screens/adminAddProduct/EditAddProduct';



const ProductCard = (props) => {
    return (

        <div className='pro_parent'>
            {/* <div className='pro_hover'>

            </div> */}
            <div className='pro_card'>

                <img className='pro_image' src={props.image} />

                <div className='pro_details'>
                    <p className='pro_title' >{props.title}</p>
                    <p className='pro_des'>{props.des}</p>
                    <div className='pro_qty_pr'>
                        <div>

                            <p className='pro_qty'>quantity</p>
                            <p className='pro_qty'>{props.qty}</p>
                        </div>
                        <div>

                            <p className='pro_price'>cost</p>
                            <p className='pro_price'>{props.price}</p>
                        </div>
                    </div>
                    <div className='pro_edit_del'>
                        <Popup className='edit_popup' trigger={<button className="pro_edit_btn pro_button" >Edit</button>}
                            position="right center">
                            <EditAddProduct />
                            {/* <div>GeeksforGeeks</div>
                            <button>Click here</button> */}
                        </Popup>
                        {/* <button className='pro_edit_btn pro_button'>Edit</button> */}
                        <button className='pro_del_btn pro_button' onClick={props.deleteonClick}>Delete</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ProductCard