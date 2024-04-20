import React, { useState, useEffect } from 'react'
import { Navbar } from "@/Components/Navbar/Navbar";
import "../styles/app.scss";
import type { AppProps } from "next/app";
import { Footer } from "@/Components/Footer/Footer";
import Loader from '@/Components/Loader';


export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);


  const override = {
    backgroundColor: '#222629',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  useEffect(() => {

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => {

    }
  }, [])
  return(
    <>
    {
      isLoading ?
        <Loader
         isLoading={isLoading}
        />
        :
        <>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </>
    }
  </>
  ) 
}
