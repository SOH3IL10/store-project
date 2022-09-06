import './style.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Rating from '@mui/material/Rating';
import ReactImageZoom from 'react-image-zoom';
import { useDispatch, useStateContext } from '../../Context/Context';
import { useEffect } from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { addToBasketAction, decrementProductQuanityAction } from '../../Context/actions';

export default function ProductPost({ product, theme }) {
    const dispatch = useDispatch();
    const { basket } = useStateContext();
    const [props, setProps] = useState({});
    const [innerWidth, setInnerWidth] = useState();

    const [changeButtons, setChangeButtons] = useState(null);
    const [productQuantity, setProductQuantity] = useState(0);

    function handleAddToBaskdet() {
        dispatch(addToBasketAction(product.id, product.image, product.title, product.price));
    }

    function incrementQualityHandler() {
        dispatch(addToBasketAction(product.id));
    }
    function decrementQualityHandler() {
        dispatch(decrementProductQuanityAction(product.id));
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

    useEffect(() => {
        function handleChangeZoomPosition() {
            if (innerWidth <= 900) {
                setProps({
                    width: 400,
                    height: 200,
                    scale: 1.2,
                    zoomPosition: 'bottom',
                    offset: { vertical: 0, horizontal: 0 }
                })
            }

            else {
                setProps({
                    width: 400,
                    height: 200,
                    scale: 1.3,
                    offset: { vertical: 0, horizontal: 20 }
                })
            }
        }
        handleChangeZoomPosition()
    }, [innerWidth])

    window.addEventListener('resize', () => setInnerWidth(window.innerWidth))

    return (
        <>
            {
                product &&
                <Grid container className={theme === 'dark' ? 'backgroundDark productPost' : 'productPost'}>
                    <Grid item xs={12} sm={12} md={4} lg={4} className='productImg'>
                        <ReactImageZoom className={'inter'} img={product.image} {...props} />
                        {/* <img src={product.image} alt={product.title} /> */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} className='productInfo'>
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
                            <p style={{ color: theme === 'dark' && '#c9c9c9' }}>{product.description}</p>
                        </div>

                        {
                            changeButtons ?
                                <div className='productQuantity'>
                                    <button className={theme === 'dark' ? 'colorDark' : undefined} onClick={decrementQualityHandler}>-</button>
                                    <strong>{productQuantity}</strong>
                                    <button className={theme === 'dark' ? 'colorDark' : undefined} onClick={incrementQualityHandler}>+</button>
                                </div> : <button className={theme === 'dark' ? 'buttonDark addToBasketButton' : 'addToBasketButton'} onClick={handleAddToBaskdet}>Add to Basket <ShoppingCartIcon /></button>
                        }

                    </Grid>
                </Grid>
            }
        </>
    )
}
