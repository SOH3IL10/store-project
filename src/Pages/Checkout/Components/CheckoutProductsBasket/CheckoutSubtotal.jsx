import React from 'react'
import './style.scss';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from 'react-router-dom';

export default function CheckoutSubtotal() {
    return (
        <div className="subTotalAndBtn">
            <Link to={'/'}>
                <button><NavigateBeforeIcon /> Continue Shoping</button>
            </Link>

            <div className='subTotal' >
                <p><small>Subtotal:</small><strong>$470.98</strong></p>
                <p><small>Shiping:</small><strong>Free</strong></p>
                <p><strong className='total'>Total:</strong><strong>$470.98</strong></p>
            </div>
        </div>
    )
}
