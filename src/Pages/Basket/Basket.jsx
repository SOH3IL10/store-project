import React from 'react'
import './style.scss'
import BasketProducts from './Components/BasketProducts'
import Layout from '../../Components/Layout'
import EmptyBasket from './Components/BasketProducts/EmptyBasket'
import { useStateContext } from '../../Context/Context'
import Grid from '@mui/material/Grid';
import { useLocation } from "react-router-dom";
import PaymentSuccess from './Components/PaymentSuccess';

export default function Basket() {
    const { basket, theme } = useStateContext();
    const { state } = useLocation();

    return (
        <Layout>
            <Grid container className='basket'>
                {
                    state?.payment === 'success' ? <PaymentSuccess theme={theme} /> :
                        basket.length <= 0 ? <EmptyBasket theme={theme} /> :
                            <>
                                <BasketProducts basket={basket} theme={theme} />
                            </>
                }
            </Grid>
        </Layout>
    )
}
