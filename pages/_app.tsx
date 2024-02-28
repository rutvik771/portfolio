import { Navbar } from "@/Components/Navbar/Navbar";
import "../styles/app.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Navbar/>
      <Component {...pageProps} />;
    </>
  ) 
}
