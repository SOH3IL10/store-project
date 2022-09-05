import React from 'react';
import './style.scss'
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from '../../../../Context/Context';
import currencyFormat from '../../../../Utils/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { addToBasketAction, decrementProductQuanityAction, removeFromBasketAction } from '../../../../Context/actions';

export default function BasketProductItem({ product, theme }) {
    const dispatch = useDispatch();

    function handleRemoveItemFromBasket() {
        dispatch(removeFromBasketAction(product.id));
    }

    function incrementQualityHandler() {
        dispatch(addToBasketAction(product.id));
    }

    function decrementQualityHandler() {
        dispatch(decrementProductQuanityAction(product.id));
    }

    return (
        <Grid container className="basketProductItem">
            <Grid item xs={12} sm={2} textAlign={'center'}>
                <img src={product.image} alt="" />
            </Grid>

            <Grid item xs={12} sm={5}>
                <Link to={`/products/${product.id}/${product.title}`}>
                    <p className='productName'><strong>{product.title}</strong></p>
                </Link>
            </Grid>

            <Grid item xs={6} sm={2} className='productQuantity'>
                <button className={theme === 'dark' ? 'colorDark' : undefined} onClick={decrementQualityHandler}>-</button>
                <strong>{product.quantity}</strong>
                <button className={theme === 'dark' ? 'colorDark' : undefined} onClick={incrementQualityHandler}>+</button>
            </Grid>

            <Grid item xs={4} sm={1} className="productPrice">
                <small>$</small>
                <strong>{currencyFormat(product.quantity * product.price)}</strong>
            </Grid>

            <Grid item xs={1} className='removeBtnBox'>
                <button onClick={handleRemoveItemFromBasket} className='removeProductBtn'>
                    <ClearIcon />
                </button>
            </Grid>
        </Grid>
    )
}
