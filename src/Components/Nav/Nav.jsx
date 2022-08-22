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

export default function Nav() {
    const { basket, theme } = useStateContext();

    
    return (
        <div>
            <nav className='nav'>

                <div className='navLogo'>
                    {/* lOGO */}
                    {/* <img src="" alt="" /> */}
                    <Link to={'/'}>
                        <h1>LOGO</h1>
                    </Link>
                </div>

                <MenuDrawer />

                <SearchBox theme={theme} />

                <div className='navBasket'>
                    <Link to={'/checkout'}>
                        <Badge badgeContent={basket.length} color="secondary">
                            <ShoppingCartIcon />
                        </Badge >
                    </Link>
                </div>

                <ChangeTheme theme={theme} />

                <ProfileSection />
            </nav>
        </div>
    )
}
