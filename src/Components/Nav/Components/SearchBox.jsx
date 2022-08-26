import React, { useState, useTransition } from 'react';
import { useEffect } from 'react';
import '../style.scss';
import SearchIcon from '@mui/icons-material/Search';
import { get } from '../../../Services/HttpClient';
import SearchResultItems from './SearchResultItems';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';

export default function SearchBox({theme}) {
    const [value, setValue] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        get()
            .then(data => setProducts(data));
    }, [])

    useEffect(() => {
        handleSearchData()
    }, [value])

    function handleSearchData() {
        if (value === "")
            setFilteredData([]);
        else {
            startTransition(() => {
                const newFilterd = products.filter(product => product.title.toLowerCase().includes(value.toLowerCase()) || product.description.toLowerCase().includes(value.toLowerCase()))
                setFilteredData(newFilterd);
            })

        }
    }

    return (
        <>
            <Grid item xs={7} md={9} lg={8} className={theme=== 'dark' ? 'backgroundDark navSearch' : 'navSearch'}>
                <input type="text" placeholder='Search products & trands' value={value} onChange={(e) => setValue(e.target.value) } />
                <div className='navSearchIcon'>
                    {value.length > 0 ? <ClearIcon onClick={() => setValue('')} /> : <SearchIcon />}
                </div>
            </Grid>
            {
                filteredData.length > 0 &&
                <div className={theme === 'dark' ? 'backgroundDark boxShadowDark searchResult' : 'searchResult'}>
                    {
                        filteredData.map(item => <SearchResultItems key={item.id} resultData={item} />)
                    }
                </div>

            }

        </>
    )
}
