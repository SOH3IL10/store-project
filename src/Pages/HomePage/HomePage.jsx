import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import Loading from '../../Components/Loading';
import { get } from '../../Services/HttpClient';
import Brands from './Components/Brands';
import DealsOfTheDay from './Components/DealsOfTheDay';
import ProductsSection from './Components/ProductSection'
import Slider from './Components/Slider';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    get()
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
      {products.length <= 0 ? <Loading /> :
        <>
          <Slider />
          {/* Papular Products */}
          <ProductsSection title={'Popular Products'} products={popularProducts} addToBasket={true} />

          {/* Featured Products */}
          <ProductsSection title={'Featured Products'} products={products} addToBasket={true} />

          <DealsOfTheDay products={products} addToBasket={true} />

          <Brands />
        </>
      }
    </Layout>


  )
}
