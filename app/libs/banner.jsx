  // "use client"
import '../styles/banner.scss'

import Image from 'next/image'
import html from '../assets/logos/html5-logo-transparent.png'
import css from '../assets/logos/css3-logo-transparent.png'
import react from '../assets/logos/react-logo-transparent.png'
import sass from '../assets/logos/sass-logo.png'
import ts from '../assets/logos/typescript-logo.png'
import redux from '../assets/logos/redux-logo.png'
import express from '../assets/logos/express-logo.png'
import node from '../assets/logos/nodejs-logo.png'
import mongo from '../assets/logos/mongodb-logo.svg'
import python from '../assets/logos/python-logo.png'
import git from '../assets/logos/git-logo.png'
import svelte from '../assets/logos/svelte-logo.png'
import next from '../assets/logos/nextjs-icon.png'

    

function Banner() {
    const techIcons1 = [html, css, react, sass, ts, redux, express/* , node, mongo, python, git, svelte, next */]
    const techIcons2 = [node, mongo, python, git, svelte, next]


    return (
        <>
            <div className='flex items-center'>
                    <div className="relative overflow-hidden h-[1rem] w-[10vw] text-white">
                    <div className="absolute whitespace-nowrap animate-scroll flex space-x-4 h-[1rem] aspect-square">
                                {techIcons1.map((src, index) => (
                                    <Image key={index} src={src} alt={'technology icon'} width={50} height={50} className="h-full"/>
                                ))}
                        </div>
                    </div>
                <h1 className='text-[2rem] font-bold mx-4'>👋 I&apos;m Logan</h1>
                    <div className="relative overflow-hidden h-[1rem] w-[10vw] text-white">
                    <div className="absolute whitespace-nowrap animate-scroll flex space-x-4 h-[1rem] aspect-square">
                                {techIcons2.map((src, index) => (
                                    <Image key={index} src={src} alt={'technology icon'} width={50} height={50} className="h-full"/>
                                ))}
                        </div>
                    </div>
            </div>
        </>
    )
  }
  
  export default Banner;
