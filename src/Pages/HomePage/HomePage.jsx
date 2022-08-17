import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import Loading from '../../Components/Loading';
import { get } from '../../Services/HttpClient';
import Brands from './Components/Brands';
import DealsOfTheDay from './Components/DealsOfTheDay';
import ProductsSection from './Components/ProductSection'
import Slider from './Components/Slider';
import { useUserData } from '@nhost/react';
import { useDispatch } from '../../Context/Context';
import { actionTypes } from '../../Context/reducer';
import { sortByStar } from '../../Utils/SortFunctions/SortFunctions';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const user = useUserData();
  const dispatch = useDispatch();

  if (user) {
    dispatch({
      type: actionTypes.SET_USER,
      payload: {
        user: user
      }
    })
  }

  useEffect(() => {
    get('?limit=10')
      .then(data => setProducts(data))
  }, [])

  useEffect(() => {
    setPopularProducts(sortByStar(products))
  }, [products])

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
