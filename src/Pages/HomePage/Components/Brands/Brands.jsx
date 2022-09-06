import Grid from '@mui/material/Grid';
import Brand from './Brand';
import './style.scss';

const images = [
  'https://www.cultofwhatever.com/wp-content/uploads/2021/01/xbox-series-s-console-poster.jpg',
  'https://cdna.artstation.com/p/assets/images/images/036/002/188/large/m-n-vinit-img-20210322-204116-186.jpg?1616482578',
  'https://www.91-cdn.com/hub/wp-content/uploads/2021/01/samsung_galaxy_s21_price_in_india_featured.jpg'
]

export default function Brands() {
  return (
    <Grid container className='brands'>
      {
        images.map((image, index) => <Brand key={index} image={image} />)
      }
    </Grid>
  )
}
