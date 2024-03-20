import React,{useEffect} from 'react'
// import './hero.css'
// import sw from './sw.png';

export const Hero = () => {
    // useEffect(() => {
    //   fetchUser();
    // }, [])
    
    // const fetchUser = async () => {
    //     const loginApi = await fetch(`http://localhost:3000/api/user`, {
    //         method: 'GET',
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json',
    //         },
    //       }).catch(error => {
    //         console.error('Error:', error);
    //       });
    //       let res = await loginApi.json();
    //       console.log(res,'res');
          
    // }
    // const createUser = async () => {
    //   const userData = {
    //     name: 'ankit',
    //     email: 'ankit@gmail.com',
    //     password: '123456',
    //   }
    //   try {
    //     const createUserApi = await fetch(`http://localhost:3000/api/user`, {
    //       method: 'POST',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(userData), // Assuming userData contains the data for creating a new user
    //     });
    
    //     if (!createUserApi.ok) {
    //       throw new Error('Failed to create user');
    //     }
    
    //     const response = await createUserApi.json();
    //     console.log(response, 'response');
    //     // Do something with the response if needed
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // };
    
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
