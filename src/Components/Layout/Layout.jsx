import React from 'react';
import Header from '../Header';
import Main from '../Main'
import './style.scss';

export default function Layout({ children }) {
  return (
    <div className='container' >
      <Header />

      <Main>
        {children}
      </Main>
      
      {/*<Footer /> */}
    </div>
  )
}
