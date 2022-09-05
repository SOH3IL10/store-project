import Layout from '../../Components/Layout';
import './style.scss';
import ProductPost from './ProductPost';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { get } from '../../Services/HttpClient'
import ProductRelated from './ProductRelated';
import Loading from '../../Components/Loading';
import { useStateContext } from '../../Context/Context';
import CustomSeparator from '../../Components/Breadcrumbs';

export default function ProductsBlog() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)
    const { theme } = useStateContext();

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
                        <CustomSeparator
                            steps={[
                                { title: 'Home', href: '/' },
                                { title: product?.category, href: `/categories/${product?.category}` },
                            ]}
                            currentStep={product?.title}
                        />

                        <ProductPost theme={theme} product={product} />

                        <ProductRelated category={product.category} theme={theme} />
                    </div>
            }
        </Layout>
    )
}
