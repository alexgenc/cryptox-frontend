import React, { useEffect } from 'react'
import Home from '../components/Home';

const HomePage = () => {
  
  useEffect(() => {
    document.title = 'CryptoX';
  }, []);
  
  return (
      <Home />
  )
}

export default HomePage;
