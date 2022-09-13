import React, { useRef, useState, useTransition } from 'react';
import { useEffect } from 'react';
import '../style.scss';
import SearchIcon from '@mui/icons-material/Search';
import { get } from '../../../Services/HttpClient';
import SearchResultItems from './SearchResultItems';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';

export default function SearchBox({ theme }) {
    const [value, setValue] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const inputRef = useRef(null);
    const searchBoxRef = useRef(null);

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
                const newFilterd = products.filter(product => product.title.toLowerCase().includes(value.toLowerCase()))
                setFilteredData(newFilterd);
            })
        }
    }

    useEffect(() => {
        function handleCloseSearchBox(e) {
            if ((inputRef.current && !inputRef.current.contains(e.target)) && (searchBoxRef.current && !searchBoxRef.current.contains(e.target)))
                setValue('');
        }

        document.body.addEventListener('click', handleCloseSearchBox);

        return () => document.body.removeEventListener('click', handleCloseSearchBox);
    }, [])

    return (
        <>
            <Grid item xs={9} md={10} lg={8} ref={inputRef} className={theme === 'dark' ? 'backgroundDark navSearch' : 'navSearch'}>
                <input type="text" placeholder='Search products & trands' value={value} onChange={(e) => setValue(e.target.value)} />
                <div className='navSearchIcon'>
                    {value.length > 0 ? <ClearIcon onClick={() => setValue('')} /> : <SearchIcon />}
                </div>
            </Grid>
            {
                filteredData.length > 0 &&
                <div ref={searchBoxRef} className={theme === 'dark' ? 'backgroundDark boxShadowDark searchResult' : 'searchResult'}>
                    <div className='searchWrapper'></div>
                    {
                        filteredData.map(item => <SearchResultItems key={item.id} resultData={item} />)
                    }
                </div>
            }
        </>
    )
}
