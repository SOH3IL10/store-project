import './style.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Rating from '@mui/material/Rating';
import ReactImageZoom from 'react-image-zoom';
import { useDispatch, useStateContext } from '../../Context/Context';
import { actionTypes } from '../../Context/reducer';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ProductPost({ product }) {
    const props = { width: 400, height: 200, scale: 1.5, offset: { vertical: 0, horizontal: 20 } };

    const dispatch = useDispatch();
    const { basket } = useStateContext();

    const [changeButtons, setChangeButtons] = useState(null);
    const [productQuantity, setProductQuantity] = useState(0);

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

    useEffect(() => {
        function checkProductQuantity() {
            const exist = basket.find(item => item.id === product.id);
            if (exist) {
                setChangeButtons(true);
                setProductQuantity(exist.quantity);

            } else {
                setChangeButtons(false);
            }
        }

        checkProductQuantity();
    }, [product, basket])

    return (
        <>
            {
                product &&
                <div className='productPost'>
                    <div className='productImg'>
                        <ReactImageZoom img={product.image} {...props}/>
                        {/* <img src={product.image} alt={product.title} /> */}
                    </div>
                    <div className='productInfo'>
                        <div className='productTitleRating'>
                            <h2>{product.title}</h2>
                            <div className="rating">
                                <Rating name="half-rating-read" defaultValue={0} value={product.rating.rate} precision={0.5} size="medium" readOnly />
                                <small>{product.rating.count} rating</small>
                            </div>
                        </div>

                        <p className='productPrice'>
                            <small>$</small>
                            <strong>{product.price}</strong>
                        </p>

                        <div className="productDescription">
                            <h3>Product Description</h3>
                            <p>{product.description}</p>
                        </div>

                        {
                            changeButtons ?
                                <div className='productQuantity'>
                                    <button onClick={decrementQualityHandler}>-</button>
                                    <strong>{productQuantity}</strong>
                                    <button onClick={incrementQualityHandler}>+</button>
                                </div> : <button className='addToBasketButton' onClick={handleAddToBaskdet}>Add to Basket <ShoppingCartIcon /></button>
                        }


                    </div>
                </div>
            }
        </>
    )
}
