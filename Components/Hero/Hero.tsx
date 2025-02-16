import React from 'react'

export const Hero = () => {
    return (
       <div id='hero'>
                <div className='hero-container'>
                    <div className='content'>
                        <p className='text-lg tracking-widest mb-4'>Hello 👋 </p>
                        <p>I’m a <span className='custom-bold secondary-text'> Full Stack Developer</span>.</p>
                        <p>Currently, I’m focused on building accessible, human-centered products at MP Consulting LLC.</p>
                    </div>
                    <img className='hero-img' src="/assets/sw.png"/>
                </div>
        </div>
    )
}
