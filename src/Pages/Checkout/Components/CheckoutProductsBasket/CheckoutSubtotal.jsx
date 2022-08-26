import React from 'react'
import './style.scss';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from 'react-router-dom';
import currencyFormat from '../../../../Utils/CurrencyFormat/CurrencyFormat';
import Grid from '@mui/material/Grid';

export default function CheckoutSubtotal({ products, theme }) {
    const total = products.reduce((amount, item) => amount + item.price * item.quantity, 0)

    return (
        <Grid container className="subTotalAndBtn">
            <Grid item xs={12} sm={6} className='buttonBox'>
                <Link to={'/'}>
                    <button className={theme === 'dark' && 'colorDark'}><NavigateBeforeIcon /> Continue Shoping</button>
                </Link>
            </Grid>

            <Grid item xs={12} sm={6} className='subTotal' >
                <p><small>Subtotal:</small><strong>{currencyFormat(total)}</strong></p>
                <p><small>Shiping:</small><strong>Free</strong></p>
                <p><strong className='total'>Total:</strong><strong>{currencyFormat(total)}</strong></p>
            </Grid>
        </Grid>
    )
}
