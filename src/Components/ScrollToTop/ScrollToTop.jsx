import React, { useState } from 'react';
import './style.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect } from 'react';
import { useStateContext } from '../../Context/Context'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { theme } = useStateContext()

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300)
      setVisible(true)
    else setVisible(false)
  };

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', toggleVisible);

  return (
    <div onClick={handleScrollToTop} className={visible ? `${theme === 'dark' && 'buttonDark boxShadowDark'} scrollToTop activeScrollToTop` : `${theme === 'dark' && 'buttonDark boxShadowDark'} scrollToTop`}>
      <KeyboardArrowUpIcon />
    </div>
  )
}
