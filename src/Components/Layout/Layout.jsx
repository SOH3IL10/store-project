import React from 'react';
import Copyright from '../Copyright';
import Footer from '../Footer';
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
      
      <Footer />

      <Copyright />
    </div>
  )
}
