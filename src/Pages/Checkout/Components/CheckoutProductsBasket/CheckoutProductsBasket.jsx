import React from 'react'
import './style.scss';
import CheckoutProductItem from './CheckoutProductItem';
import CheckoutSubtotal from './CheckoutSubtotal';

export default function CheckoutProductsBasket({ basket, theme }) {

    return (
        <div className='checkoutProductsBasket'>
            <h1>Shopping Cart.</h1>
            <div className='checkOutProducts'>
                {
                    basket?.map(product => <CheckoutProductItem key={product.id} product={product} theme={theme} />)
                }
            </div>

            <CheckoutSubtotal theme={theme} products={basket} />
        </div>
    )
}
