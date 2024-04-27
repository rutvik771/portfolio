import React from 'react'
import Image from 'next/image'


export const About = () => {

  const imageLoader = ({src}) => {
    return `${src}?q=${100}`
  }

  return (
    <div id='about'>
      <div className='about-container'>
        <div className='responsive-container'>
          <div>
          <p className='about-title'>About Me</p>
          </div>
          <div className='main-content gap-x-6 gap-y-6'>
            <div className='mobile-responsive'>
              <div>
                <p>Hello! My name is Rutvik Patel, and I specialize in building web applications using the MERN (MongoDB, Express, React, and Node.js) technology stack.</p>
                <p className='py-2'>I am passionate about my work and enjoy tackling complex challenges. I believe that communication, collaboration, and attention to detail are key factors in delivering successful projects. Therefore, I always work closely with my clients to understand their specific requirements, provide regular updates, and ensure that the final product exceeds their expectations.</p>
              </div>
              <div className='py-3'>
                <p>Here are a few technologies I’ve been working with recently:</p>
                <ul className='grid grid-cols-2 gap-2 m-4 list-none secondary-text'>
                  <li>Java-script</li>
                  <li>React Js</li>
                  <li>Next Js</li>
                  <li>Node js</li>
                  <li>Mongo DB</li>
                  <li>MY SQL</li>
                  <li>Exprees Js</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
            <Image
              loader={imageLoader}
              className='my-img'
              src="/assets/about/rutvik.jpeg"
              alt="Picture of the author"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
