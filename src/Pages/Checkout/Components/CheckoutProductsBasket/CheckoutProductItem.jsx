import React from 'react';
import './style.scss'
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from '../../../../Context/Context';
import { actionTypes } from '../../../../Context/reducer';
import currencyFormat from '../../../../Utils/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';

export default function CheckoutProductItem({ product }) {
    const dispatch = useDispatch();

    function handleRemoveItemFromBasket() {
        dispatch({
            type: actionTypes.REMOVE_FROM_BASKET,
            payload: {
                id: product.id
            }
        })
    }

    function incrementQualityHandler() {
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            payload: {
                id: product.id
            }
        })
    }
    function decrementQualityHandler() {
        dispatch({
            type: actionTypes.DECREMENT_PRODUCT_QUANITY,
            payload: {
                id: product.id
            }
        })
    }
    return (
        <div className="checkOutProductItem">
            <img src={product.image} alt="" />

            <Link to={`/products/${product.id}`}>
                <p className='productName'><strong>{product.title}</strong></p>
            </Link>

            <div className='productQuantity'>
                <button onClick={decrementQualityHandler}>-</button>
                <strong>{product.quantity}</strong>
                <button onClick={incrementQualityHandler}>+</button>
            </div>

            <div className="productPrice">
                <small>$</small>
                <strong>{currencyFormat(product.quantity * product.price)}</strong>
            </div>

            <button onClick={handleRemoveItemFromBasket} className='removeProductBtn'>
                <ClearIcon />
            </button>
        </div>
    )
}
