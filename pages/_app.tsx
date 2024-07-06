import React, { useState, useEffect } from "react";
import { Navbar } from "@/Components/Navbar/Navbar";
import "../styles/app.scss";
import type { AppProps } from "next/app";
import { Footer } from "@/Components/Footer/Footer";
import Loader from "@/Components/Loader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
