import React from 'react';
import './style.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';


export default function Header() {
    return (
        <nav className='header'>

            <div className='headerLogo'>
                {/* lOGO */}
                {/* <img src="" alt="" /> */}
                <h1>LOGO</h1>
            </div>

            <div className='headerMenu'>
                <MenuIcon />
            </div>

            <div className='headerSearch'>
                <input type="text" placeholder='Search products & trands' />
                <div className='headerSearchIcon'>
                    <SearchIcon />
                </div>
            </div>

            <div className='headerBasket'>
                <Badge badgeContent={1} color="secondary">
                    <ShoppingCartIcon />
                </Badge >
            </div>

            <div className='headerRegister'>
                <span>Sign Up</span> / <span>Login</span>
            </div>
        </nav>
    )
}
