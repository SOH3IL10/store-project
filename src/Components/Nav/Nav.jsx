import React from 'react'
import './style.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../Context/Context';
import ProfileSection from './Components/ProfileSection';
import MenuDrawer from './Components/MenuDrawer';
import SearchBox from './Components/SearchBox';
import ChangeTheme from './Components/ChangeTheme';
import Grid from '@mui/material/Grid';

export default function Nav() {
    const { basket, theme } = useStateContext();

    return (
        <div>
            <Grid container component={'nav'} className='nav'>

                <MenuDrawer />

                <Grid item xs={10} lg={1} className='navLogo'>
                    {/* lOGO */}
                    {/* <img src="" alt="" /> */}
                    <Link to={'/'}>
                        <h1>LOGO</h1>
                    </Link>
                </Grid>

                <ChangeTheme theme={theme} />
                
                <SearchBox theme={theme} />

                <Grid item xs={1.5} md={1} lg={0.5} className='navBasket'>
                    <Link to={'/basket'}>
                        <Badge badgeContent={basket.length} color="secondary">
                            <ShoppingCartIcon />
                        </Badge >
                    </Link>
                </Grid>

                <ProfileSection />
            </Grid>
        </div>
    )
}
