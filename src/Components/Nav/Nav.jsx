import React from 'react'
import './style.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../Context/Context';

export default function Nav() {
    const { basket } = useStateContext();
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

                <div className='navMenu'>
                    <MenuIcon />
                </div>

                <div className='navSearch'>
                    <input type="text" placeholder='Search products & trands' />
                    <div className='navSearchIcon'>
                        <SearchIcon />
                    </div>
                </div>

                <div className='navBasket'>
                    <Link to={'/checkout'}>
                        <Badge badgeContent={basket.length} color="secondary">
                            <ShoppingCartIcon />
                        </Badge >
                    </Link>
                </div>

                <div className='navRegister'>
                    <span>Sign Up</span> / <span>Login</span>
                </div>
            </nav>
        </div>
    )
}
