import './style.scss';
import Grid from '@mui/material/Grid';

export default function Brand({image}) {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} className='brand'>
        <img src={image} alt="" />
    </Grid>
  )
}
