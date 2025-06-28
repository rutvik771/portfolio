import React, { useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from "next/router";



export const Navbar = () => {
  const router = useRouter();

  const handleWorkClick = (e:any) => {
    e.preventDefault();
    if (router.pathname === '/') {
      scrollToWork();
    } else {
      router.push('/#work');
    }
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const openNavbar = () => {
    const navLinks = document.querySelector('.nav-links');
    const lines = document.querySelectorAll('.line');
    navLinks?.classList.toggle('active');
    lines.forEach((line) => {
      line.classList.toggle('active');
    });
  };

  return (

    <>
      <div id='desktop-navbar'>
        <nav className='navbar-container'>
          <Link href="/" className={`logo ${router.pathname == "/" ? "link-active" : ""}`}>
              Rutvik Patel
          </Link>
          <div className='menu'>
            <Link href="#" onClick={handleWorkClick} className={router.pathname.includes("#work") ? "link-active" : ""}>
              Work
            </Link>
            <Link href="/blog" className={router.pathname.includes("blog") ? "link-active" : ""}>
             Blog
            </Link>
            <Link href="/about" className={router.pathname == "/about" ? "link-active" : ""}>
              About
            </Link>
            <a href='/assets/resume/resume.pdf' target="_blank">Resume</a>
            {/* <Link href="/blog/create-blog" className={router.pathname == "/blog/create-blog" ? "link-active" : ""}>
              writing
            </Link> */}
          </div>
        </nav>
      </div>
      <div id='mobile-navbar'>
        <nav className="mobile-navbar">
          <div className="navbar-container">
            <Link href="/" className='logo'>
                Rutvik Patel
            </Link>
            <div className="hamburger" onClick={openNavbar}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="nav-links">
            <Link href="#" onClick={(e) =>{handleWorkClick(e),openNavbar()}} className="nav-link">
                Work
            </Link>
            <Link href="/blog" onClick={openNavbar} className="nav-link">
            Blog
            </Link>
            <Link href="/about" onClick={openNavbar} className="nav-link">
                About
            </Link>
            <a href='/assets/resume/resume.pdf' onClick={openNavbar} className="nav-link" target="_blank">Resume</a>
          </div>
        </nav>
      </div>
    </>
  )
}

