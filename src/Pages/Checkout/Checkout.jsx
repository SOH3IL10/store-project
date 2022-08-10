import React from 'react'
import './style.scss'
import CheckoutProductsBasket from './Components/CheckoutProductsBasket'
import Payment from './Components/Payment'
import Layout from '../../Components/Layout'

export default function Checkout() {
    return (
        <Layout>
            <div className='checkout'>
                <CheckoutProductsBasket />

                <Payment />
            </div>
        </Layout>
    )
}
