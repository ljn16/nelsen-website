import '../styles/section.scss'

import Image from 'next/image'
import loganPfp from '../assets/logan-pfp.png'



function Biography() {


  return (
    <>
      <div className='
      relative flex'>
        <Image className='
        w-full h-auto' src={loganPfp} alt="Logan's Profile Picture"/>
        <div className='
        absolute 
        top-80 left-0 w-full md:left-3/4 md:top-10
        bg-white bg-opacity-50 md:bg-opacity-15 rounded-lg p-4 
        md:min-w-[300px]'>
          <h2 className='text-green-500'>Hi, I'm Logan</h2>
          <p className=''>I am a software engineer with a passion for building innovative, intuitive full-stack applications to solve real-world problems with user psychology/cognition in mind. A broad range of experience using React, Sass, Node.js, SQL/NoSQL, and more.</p>
        </div>
      </div>
    </>
  )
}

export default Biography;

// absolute top-0 right-0 w-1/3 h-full bg-white bg-opacity-75 p-4