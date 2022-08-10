import React from 'react'
import './style.scss';
import CheckoutProductItem from './CheckoutProductItem';
import CheckoutSubtotal from './CheckoutSubtotal';

export default function CheckoutProductsBasket() {
    return (
        <div className='checkoutProductsBasket'>
            <h1>Shopping Cart.</h1>
            <div className='checkOutProducts'>
                <CheckoutProductItem />
            </div>

            <CheckoutSubtotal />
        </div>
    )
}
