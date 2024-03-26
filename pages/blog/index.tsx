import BlogPost from '@/Components/Blog/BlogPost'
import { useRouter } from "next/router";
import React from 'react'

const index = () => {
  const router = useRouter();
  return (
    <div id='blog'>
      <div>
        <h2 className='text-center text-3xl py-3'>Blog</h2>
        <button className='primary-btn' type='button' onClick={()=>{router.push('/blog/create-blog')}}>Create Post</button>
      </div>
    </div>
  )
}

export default index