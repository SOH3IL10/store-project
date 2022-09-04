import React from 'react'
import './style.scss';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from 'react-router-dom';
import currencyFormat from '../../../../Utils/CurrencyFormat/CurrencyFormat';
import Grid from '@mui/material/Grid';
import getBasketSubtotal from '../../../../Utils/BasketTotal/getBasketTotal';
import Payment from '../Payment';

export default function BasketSubtotal({ products, theme }) {
    const total = currencyFormat(getBasketSubtotal(products));

    return (
        <Grid container className="subTotalAndBtn">
            <Grid item xs={12} sm={6} className='buttonBox'>
                <Link to={'/'}>
                    <button className={theme === 'dark' ? 'colorDark' : undefined}><NavigateBeforeIcon /> Continue Shoping</button>
                </Link>
            </Grid>

            <Grid item xs={12} sm={6} className='subTotal' >
                <p><small>Subtotal:</small><strong>{total}</strong></p>
                <p><small>Shiping:</small><strong>Free</strong></p>
                <p><strong className='total'>Total:</strong><strong>{total}</strong></p>
                <Payment price={total} />
            </Grid>
        </Grid>
    )
}
