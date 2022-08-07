import React from 'react';
import './style.scss';

export default function Product() {
    return (
        <div className='product'>
            <img src="https://m.media-amazon.com/images/I/61bX2AoGj2L._AC_SX342_.jpg" alt="" />
            <h3><strong>Aplle MacBook Pro</strong></h3>

            <p>Lorem recusandae quasi nobis molestiae ex placeat ducimus quae, reiciendis est facilis ab in dolorem impedit.</p>

            <div className='priceAndStar'>
                <p>⭐⭐⭐⭐</p>
                <strong>$93.99</strong>
            </div>

            <button>Add to Basket</button>
        </div>
    )
}
