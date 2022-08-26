import React from 'react'
import './style.scss';
import Grid from '@mui/material/Grid';

export default function FooterItem({ title, items }) {
    return (
        <Grid item xs={12} sm={4} md={4} lg={2} className="footerList">
            <h3 className="footerItemTitle">{title}</h3>
            <ul>
                {
                    items?.map((item, index) => <li key={index} >{item}</li>)
                }
            </ul>
        </Grid>
    )
}
