import React from 'react';
import Copyright from '../Copyright';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main'
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './style.scss';

export default function Layout({ children }) {
  return (
    <div className='container' >
      <Header />

      <Main>
        {children}
      </Main>
      
      <ScrollToTop />
      <Footer />

      <Copyright />
    </div>
  )
}
