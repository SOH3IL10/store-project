import React from 'react'
import './style.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

export default function Nav() {
    return (
        <div>
            <nav className='nav'>

                <div className='navLogo'>
                    {/* lOGO */}
                    {/* <img src="" alt="" /> */}
                    <h1>LOGO</h1>
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
                    <Badge badgeContent={1} color="secondary">
                        <ShoppingCartIcon />
                    </Badge >
                </div>

                <div className='navRegister'>
                    <span>Sign Up</span> / <span>Login</span>
                </div>
            </nav>
        </div>
    )
}
