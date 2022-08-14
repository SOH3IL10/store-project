import Layout from '../../Components/Layout';
import './style.scss';
import ProductPost from './ProductPost';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { get } from '../../Services/HttpClient'
import ProductRelated from './ProductRelated';
import Loading from '../../Components/Loading';

export default function ProductsBlog() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)

    const params = useParams();

    useEffect(() => {
        setLoading(true);
        get(`/${params.productID}`)
            .then(data => {
                setProduct(data);
                setLoading(false)
            })
    }, [params.productID])


    return (
        <Layout>
            {
                loading ? <Loading /> :
                    <div className='productsBlog'>

                        <ProductPost product={product} />

                        <ProductRelated category={product.category} />
                    </div>
            }
        </Layout>
    )
}
