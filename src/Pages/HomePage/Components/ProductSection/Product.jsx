import React from 'react';
import './style.scss';
import Rating from '@mui/material/Rating';
import { useDispatch } from '../../../../Context/Context';
import { Link } from 'react-router-dom';
import { addToBasketAction } from '../../../../Context/actions';

export default function Product({ product, addToBasket, classNameProps, theme }) {

    const dispatch = useDispatch();

    function handleAddToBaskdet() {
        dispatch(addToBasketAction(product.id, product.image, product.title, product.price));
    }

    return (
        <>
            {product &&
                <div className={theme === 'dark' ? `backgroundDark boxShadowDark product ${classNameProps}` : `product ${classNameProps}`}>
                    <img src={product.image} alt="" />

                    <div className='productDetail'>
                        <Link to={`/products/${product.id}/${product.title}`}>
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
                            addToBasket && <button className={theme === 'dark' ? 'buttonDark' : undefined} onClick={handleAddToBaskdet}>Add to Basket</button>
                        }
                    </div>
                </div>
            }
        </>
    )
}
