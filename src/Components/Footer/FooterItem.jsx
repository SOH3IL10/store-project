import React from 'react'
import './style.scss';

export default function FooterItem({ title, items }) {
    return (
        <div className="footerList">
            <h3 className="footerItemTitle">{title}</h3>
            <ul>
                {
                    items?.map((item, index) => <li key={index} >{item}</li>)
                }
            </ul>
        </div>
    )
}
