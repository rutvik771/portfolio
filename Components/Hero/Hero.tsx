import React,{useEffect} from 'react'
// import './hero.css'
// import sw from './sw.png';

export const Hero = () => {
    useEffect(() => {
      fetchUser();
    }, [])
    
    const fetchUser = async () => {
        const loginApi = await fetch(`http://localhost:3000/api/user`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }).then(response => {
              console.log(response);
            // if (response.ok) {
            //   return response.json();
            // } else {
            //   throw new Error('Something went wrong');
            // }
          })
          .catch(error => {
            console.error('Error:', error);
          });
    }
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
