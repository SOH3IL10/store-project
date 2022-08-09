import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import { get } from '../../Services/HttpClient';
import Brands from './Components/Brands';
import DealsOfTheDay from './Components/DealsOfTheDay';
import ProductsSection from './Components/ProductSection'

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    get('category/electronics')
      .then(data => setProducts(data))
  }, [])

  useEffect(() => {
    sortedByStar()
  }, [products])

  function sortedByStar() {
    const productsCopy = [...products];
    productsCopy.sort((a, b) => parseFloat(b.rating.rate) - parseFloat(a.rating.rate))

    setPopularProducts(productsCopy);
  }

  return (
    <Layout>
      {/* Popular Products */}
      <ProductsSection title={'Popular Products'} products={popularProducts} />

      {/* Featured Products */}
      <ProductsSection title={'Featured Products'} products={products} />

      <DealsOfTheDay products={products} />
    
      <Brands />
    </Layout>
  )
}
