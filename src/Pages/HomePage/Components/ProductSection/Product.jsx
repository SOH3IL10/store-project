import React from 'react';
import './style.scss';
import Rating from '@mui/material/Rating';

export default function Product({ product }) {

    return (
        <>
            {product &&
                <div className='product'>
                    <img src={product.image} alt="" />
                    <h3><strong>{product.title}</strong></h3>

                    <p className='productInfo'>{product.description}</p>

                    <div className='priceAndStar'>
                        <Rating name="half-rating-read" defaultValue={0} value={product.rating.rate} precision={0.5} size="small" readOnly />

                        <p className={'productPrice'}>
                            <small>$</small>
                            <strong>{product.price}</strong>
                        </p>
                    </div>

                    <button>Add to Basket</button>
                </div>
            }
        </>
    )
}
