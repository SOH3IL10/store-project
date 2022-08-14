import React from 'react';
import './style.scss';
import Rating from '@mui/material/Rating';
import { useDispatch } from '../../../../Context/Context';
import { actionTypes } from '../../../../Context/reducer';
import { Link } from 'react-router-dom';

export default function Product({ product, addToBasket }) {

    const dispatch = useDispatch();

    function handleAddToBaskdet() {
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            payload: {
                id: product.id,
                image: product.image,
                title: product.title,
                price: product.price,
                quantity: 1
            }
        })
    }

    return (
        <>
            {product &&
                <div className='product'>
                    <img src={product.image} alt="" />
                    <Link to={`/products/${product.id}`}>
                        <h3><strong>{product.title}</strong></h3>
                    </Link>

                    <p className='productInfo'>{product.description}</p>

                    <div className='priceAndStar'>
                        <Rating name="half-rating-read" defaultValue={0} value={product.rating.rate} precision={0.5} size="small" readOnly />

                        <p className={'productPrice'}>
                            <small>$</small>
                            <strong>{product.price}</strong>
                        </p>
                    </div>

                    {
                        addToBasket && <button onClick={handleAddToBaskdet}>Add to Basket</button>
                    }
                </div>
            }
        </>
    )
}
