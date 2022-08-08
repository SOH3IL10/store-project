import React from 'react';
import './style.scss';

export default function Product({ product, rating }) {

    return (
        <>
            {product &&
                <div className='product'>
                    <img src={product.image} alt="" />
                    <h3><strong>{product.title}</strong></h3>

                    <p className='productInfo'>{product.description}</p>

                    <div className='priceAndStar'>
                        <p>
                            {
                                Array(rating).fill().map((_, i) => <small key={i}>⭐</small>)
                            }
                        </p>

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
