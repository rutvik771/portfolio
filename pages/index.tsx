import Head from "next/head";
import { Hero } from "@/Components/Hero/Hero";
import { TechStack } from "@/Components/TechStack/TechStack";
import { Project } from "@/Components/Project/Project";
import { Work } from "@/Components/Work/Work";
import { Contact } from "@/Components/Contacts/Contact";

export default function Index() {
  return (
    <>
      <Head>
        <title>Rutvik Patel</title>
        <meta
          name="description"
          content="Hello! My name is Rutvik Patel, and I specialize in building web applications using the MERN (MongoDB, Express, React, and Node.js) technology stack"
        />
        <meta
          name="keywords"
          content="Java-script,React Js,Next Js,Node js,Mongo DB,MY SQL,Exprees Js,
          AWS,github,git,vs code,HTML5,CSS3,Bootstrap,Material UI,Chakra UI,React-Bootstrap,
          React-Router,React-Query,Redux,
          Context API,REST API,GraphQL,TypeScript,JWT,OAuth,Passport,Socket.io,
          Web Sockets,Heroku,Netlify,Vercel,"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rutvik Patel" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero />
      <TechStack />
      <Project />
      <Work />
      <Contact />
    </>
  );
}
