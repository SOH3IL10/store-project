import React from 'react'
import './style.scss'
import BasketProducts from './Components/BasketProducts'
import Layout from '../../Components/Layout'
import EmptyBasket from './Components/BasketProducts/EmptyBasket'
import { useStateContext } from '../../Context/Context'
import Grid from '@mui/material/Grid';

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
            </Grid>
        </Layout>
    )
}
