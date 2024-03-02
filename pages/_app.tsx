import React, { useState, useEffect } from 'react'
import { Navbar } from "@/Components/Navbar/Navbar";
import "../styles/app.scss";
import type { AppProps } from "next/app";
import { Footer } from "@/Components/Footer/Footer";
import SyncLoader from "react-spinners/SyncLoader";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [color, setColor] = useState("#86C232");

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
        <div className='loader'>
          <SyncLoader
            color={color}
            loading={isLoading}
            size={16}
          />
        </div>
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
