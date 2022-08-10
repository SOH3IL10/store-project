import React from 'react';
import './style.scss'
import ClearIcon from '@mui/icons-material/Clear';

export default function CheckoutProductItem() {
    return (
        <div className="checkOutProductItem">
            <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="" />

            <p className='productName'><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi atligendi saepe ea quia rem dt.</strong></p>

            <div className='productQuantity'>
                <button>-</button>
                <input type="number" />
                <button>+</button>
            </div>

            <div className="productPrice">
                <small>$</small>
                <strong>93.23</strong>
            </div>

            <button className='removeProductBtn'>
                <ClearIcon />
            </button>
        </div>
    )
}
