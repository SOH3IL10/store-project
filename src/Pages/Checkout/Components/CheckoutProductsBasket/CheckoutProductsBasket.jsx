import React from 'react'
import './style.scss';
import CheckoutProductItem from './CheckoutProductItem';
import CheckoutSubtotal from './CheckoutSubtotal';
import Grid from '@mui/material/Grid';

export default function CheckoutProductsBasket({ basket, theme }) {

    return (
        <Grid item xs={11} md={7} lg={7} className='checkoutProductsBasket'>
            <h1>Shopping Cart.</h1>
            <div className='checkOutProducts'>
                {
                    basket?.map(product => <CheckoutProductItem key={product.id} product={product} theme={theme} />)
                }
            </div>

            <CheckoutSubtotal theme={theme} products={basket} />
        </Grid>
    )
}
