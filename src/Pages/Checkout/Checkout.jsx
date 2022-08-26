import React from 'react'
import './style.scss'
import CheckoutProductsBasket from './Components/CheckoutProductsBasket'
import Payment from './Components/Payment'
import Layout from '../../Components/Layout'
import EmptyBasket from './Components/CheckoutProductsBasket/EmptyBasket'
import { useStateContext } from '../../Context/Context'
import Grid from '@mui/material/Grid';

export default function Checkout() {
    const { basket, theme } = useStateContext();

    return (
        <Layout>
            <Grid container className='checkout'>
                {
                    basket.length <= 0 ? <EmptyBasket theme={theme} /> :
                        <>
                            <CheckoutProductsBasket basket={basket} theme={theme} />
                            <Payment theme={theme} />
                        </>
                }
            </Grid>
        </Layout>
    )
}
