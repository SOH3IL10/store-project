import React from 'react'
import './style.scss'
import CheckoutProductsBasket from './Components/CheckoutProductsBasket'
import Payment from './Components/Payment'
import Layout from '../../Components/Layout'
import EmptyBasket from './Components/CheckoutProductsBasket/EmptyBasket'
import { useStateContext } from '../../Context/Context'

export default function Checkout() {
    const { basket } = useStateContext();

    return (
        <Layout>
            <div className='checkout'>
                {
                    basket.length <= 0 ? <EmptyBasket /> :
                        <>
                            <CheckoutProductsBasket basket={basket} />
                            <Payment />
                        </>
                }
            </div>
        </Layout>
    )
}
