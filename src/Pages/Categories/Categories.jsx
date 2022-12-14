import Layout from '../../Components/Layout';
import './style.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FilterTools from './Components/FilterTools';
import Product from '../HomePage/Components/ProductSection/Product';
import { get } from '../../Services/HttpClient'
import { sortByNameA_Z, sortByNameZ_A, sortByPriceHigh_Low, sortByPriceLow_High, sortByStar } from '../../Utils/SortFunctions/SortFunctions';
import Loading from '../../Components/Loading';
import { useStateContext } from '../../Context/Context';
import CustomSeparator from '../../Components/Breadcrumbs';

export default function Categories() {
    const { category } = useParams();
    const [filter, setFilter] = useState('newest');
    const [displayDirection, setDisplayDirection] = useState(true);
    const [products, setProducts] = useState([]);
    const [newest, setNewest] = useState([]);
    const [loading, setLoading] = useState(true);
    const { theme } = useStateContext();

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    useEffect(() => {
        setLoading(true);
        if (category === "all categories") {
            get()
                .then(data => {
                    setFilter('newest');
                    setProducts(data);
                    setNewest(data);
                    setLoading(false);
                })
        } else {
            get(`category/${category}`)
                .then(data => {
                    setFilter('newest');
                    setProducts(data);
                    setNewest(data);
                    setLoading(false);
                })
        }
    }, [category])

    useEffect(() => {
        switch (filter) {
            case 'popular':
                setProducts(sortByStar(products));
                break;
            case 'A-Z':
                setProducts(sortByNameA_Z(products));
                break;
            case 'Z-A':
                setProducts(sortByNameZ_A(products));
                break;
            case 'low-high':
                setProducts(sortByPriceLow_High(products));
                break;
            case 'high-low':
                setProducts(sortByPriceHigh_Low(products));
                break;
            case 'newest':
                const copyNewest = [...newest];
                setProducts(copyNewest);
                break;
            default:
                return Error(`This filter (${filter}) method not defind`);
        }
    }, [filter])

    return (
        <Layout>
            <div className='categories'>
                <CustomSeparator steps={[
                    { title: 'Home', href: '/' },
                    { title: 'Categories', href: '/categories/all categories' },
                ]} currentStep={category} />

                <FilterTools theme={theme} displayDirection={displayDirection} setDisplayDirection={setDisplayDirection} handleChange={handleChange} filter={filter} />
                {
                    loading ? <Loading /> :
                        <div className={displayDirection ? "categoriesItem" : 'displayColumn'}>
                            {products &&
                                products.map(product => <Product key={product.id} theme={theme} classNameProps={'categoryItem'} addToBasket={true} product={product} />)
                            }
                        </div>
                }
            </div>
        </Layout>
    )
}
