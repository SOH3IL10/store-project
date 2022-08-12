import React from 'react'
import './style.scss';
import CheckoutProductItem from './CheckoutProductItem';
import CheckoutSubtotal from './CheckoutSubtotal';

export default function CheckoutProductsBasket({ basket }) {

    return (
        <div className='checkoutProductsBasket'>
            <h1>Shopping Cart.</h1>
            <div className='checkOutProducts'>
                {
                    basket?.map(product => <CheckoutProductItem key={product.id} product={product} />)
                }
            </div>

            <CheckoutSubtotal products={basket} />
        </div>
    )
}
