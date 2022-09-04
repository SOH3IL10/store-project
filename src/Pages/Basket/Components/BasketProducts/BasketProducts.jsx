import React from 'react'
import './style.scss';
import BasketProductItem from './BasketProductItem';
import BasketSubtotal from './BasketSubtotal';
import Grid from '@mui/material/Grid';

export default function BasketProducts({ basket, theme }) {

    return (
        <Grid item xs={11} className='basketProducts'>
            <h1>Shopping Cart.</h1>
            <div className='checkOutProducts'>
                {
                    basket?.map(product => <BasketProductItem key={product.id} product={product} theme={theme} />)
                }
            </div>

            <BasketSubtotal theme={theme} products={basket} />
        </Grid>
    )
}
