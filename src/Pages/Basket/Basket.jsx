import React from 'react'
import './style.scss'
import BasketProducts from './Components/BasketProducts'
import Payment from './Components/Payment'
import Layout from '../../Components/Layout'
import EmptyBasket from './Components/BasketProducts/EmptyBasket'
import { useStateContext } from '../../Context/Context'
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom'

export default function Basket() {
    const { basket, theme } = useStateContext();

    return (
        <Layout>
            <Grid container className='basket'>
                {
                    basket.length <= 0 ? <EmptyBasket theme={theme} /> :
                        <>
                            <BasketProducts basket={basket} theme={theme} />
                        </>
                }
                <Outlet />
            </Grid>
        </Layout>
    )
}
