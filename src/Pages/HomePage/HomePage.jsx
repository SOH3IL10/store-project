import React from 'react'
import Layout from '../../Components/Layout'
import ProductsSection from './Components/ProductSection'

export default function HomePage() {
  return (
    <Layout>
        {/* Popular Products */}
          <ProductsSection title={'Popular Products'} />

        {/* Featured Products */}
          <ProductsSection title={'Featured Products'} />

    </Layout>
  )
}
