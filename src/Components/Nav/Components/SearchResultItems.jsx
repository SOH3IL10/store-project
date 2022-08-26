import React from 'react';
import '../style.scss';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

export default function SearchResultItems({ resultData }) {
    return (
        <Grid container className="searchResultItem">
            <Grid item xs={4} textAlign={'center'}>
                <img src={resultData.image} alt={resultData.title} />
            </Grid>
            <Grid item xs={8} className='searchResultInfo'>
                <Link to={`/products/${resultData.id}`}>
                    <strong className='resultItemName'>{resultData.title}</strong>
                </Link>
                <small className='resultItemRating'>
                    <Rating name="half-rating-read" defaultValue={0} value={resultData.rating.rate} precision={0.5} size="small" readOnly />
                </small>
                <strong className='resultItemPrice'>${resultData.price}</strong>
            </Grid>
        </Grid>
    )
}
