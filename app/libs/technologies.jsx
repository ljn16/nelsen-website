// import '../styles/section.scss'
// import Salutation from './salutation.jsx'

import Image from 'next/image'
// 
import typescript from '/app/assets/technology icons/typescript.png'
import python from '/app/assets/technology icons/python.png'

import node from '/app/assets/technology icons/node.png'
import express from '/app/assets/technology icons/express-logo.png'
import next from '/app/assets/technology icons/next.png'
import react from '/app/assets/technology icons/react.png'
import redux from '/app/assets/technology icons/redux.png'
import svelte from '/app/assets/technology icons/svelte.png'


import sass from '/app/assets/technology icons/sass.png'
import tailwind from '/app/assets/technology icons/tailwind.png'

import git from '/app/assets/technology icons/git.png'
import aws from '/app/assets/technology icons/aws.png'




function Technologies() {


  return (
    <>
      <div className='
       md:rounded-lg
      mt-52 md:mt-20 md:min-w-[300px]'>
        <h2 className='text-green-500'>Favorite Technologies</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
          <div className="flex flex-col justify-center items-center hover:scale-125 transition-transform duration-300">
            {/* <h6 className='text-center'>React</h6> */}
            <Image src={typescript} alt="Typescript icon" width={75} height={75} />
          </div>
          <div className="flex flex-col justify-center items-center hover:scale-125 transition-transform duration-300">
            {/* <h6 className='text-center'>Python</h6> */}
            <Image src={python} alt="Python icon" width={75} height={75} />
          </div>
          <div className="flex flex-col justify-center items-center hover:scale-125 transition-transform duration-300">
            {/* <h6 className='text-center'>Node</h6> */}
            <Image src={node} alt="Node icon" width={75} height={75} />
          </div>
          <div className="flex flex-col justify-center items-center hover:scale-125 transition-transform duration-300">
            {/* <h6 className='text-center'>Express</h6> */}
            <Image src={express} alt="Express icon" width={75} height={75} />
          </div>
          <div className="flex flex-col justify-center items-center hover:scale-125 transition-transform duration-300">
            {/* <h6 className='text-center'>Next.js</h6> */}
            <Image src={next} alt="Next icon" width={75} height={75} />
          </div>
          <div className="flex flex-col justify-center items-center hover:scale-125 transition-transform duration-300">
            {/* <h6 className='text-center'>Svelte</h6> */}
            <Image src={react} alt="React icon" width={75} height={75} />
          </div>
          <div className="flex flex-col justify-center items-center hover:scale-125 transition-transform duration-300">
            {/* <h6 className='text-center'>Tailwind</h6> */}
            <Image src={redux} alt="Redux icon" width={75} height={75} />
          </div>
          <div className="flex flex-col justify-center items-center hover:scale-125 transition-transform duration-300">
            {/* <h6 className='text-center'>Sass</h6> */}
            <Image src={svelte} alt="Svelte icon" width={75} height={75} />
          </div>
          <div className="hidden md:flex flex-col justify-center items-center hover:scale-125 transition-transform duration-300">
            {/* <h6 className='text-center'>Next.js</h6> */}
            <Image src={sass} alt="Sass icon" width={75} height={75} />
          </div>
          <div className="hidden md:flex flex-col justify-center items-center hover:scale-125 transition-transform duration-300">
            {/* <h6 className='text-center'>Next.js</h6> */}
            <Image src={tailwind} alt="Tailwind icon" width={75} height={75} />
          </div>
          <div className="flex flex-col justify-center items-center hover:scale-125 transition-transform duration-300">
            {/* <h6 className='text-center'>Next.js</h6> */}
            <Image src={git} alt="Git icon" width={75} height={75} />
          </div>
          <div className="hidden md:flex flex-col justify-center items-center hover:scale-125 transition-transform duration-300">
            {/* <h6 className='text-center'>Next.js</h6> */}
            <Image src={aws} alt="AWS icon" width={75} height={75} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Technologies;

// absolute top-0 right-0 w-1/3 h-full bg-white bg-opacity-75 p-4