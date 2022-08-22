import React, { useEffect, useState } from 'react'
import { get } from '../../Services/HttpClient';
import ProductsSection from '../HomePage/Components/ProductSection'

export default function ProductRelated({ category, theme }) {
    const [productsRelated, setProductsRelated] = useState([]);

    useEffect(() => {
        get(`/category/${category}`)
            .then(data => setProductsRelated(data))
    }, [category])

    return (
        <>
            {productsRelated.length > 0 &&
                <ProductsSection title='Products related to this item' theme={theme} products={productsRelated} addToBasket={false} />
            }
        </>
    )
}
