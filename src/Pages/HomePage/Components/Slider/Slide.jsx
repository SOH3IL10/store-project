import React from 'react';
import './style.scss';

export default function Slide({ title, info, bgImage, bgColor }) {
    return (
        <div style={{ background: `url(${bgImage}) #${bgColor}` }} className='slide'>
            <div className="slide-wrapper">
                <div className='content'>
                    <h1>{title}</h1>

                    <p>{info}</p>

                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    )
}