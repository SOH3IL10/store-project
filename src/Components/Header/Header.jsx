import React from 'react';
import './style.scss';
import Nav from '../Nav';
import Slider from '../Slider';


export default function Header() {
    return (
        <div className='header'>
            <Nav />
            <Slider />
        </div>
    )
}
