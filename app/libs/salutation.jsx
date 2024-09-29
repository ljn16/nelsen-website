// "use client"
import '../styles/salutation.scss'

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


function Salutation() {
  return (
    <>
    <div className='salutation-wrapper'>

        <div className='logo-banner-wrapper'>
            <div className='logo-banner'>
                <Image src={html} alt="HTML5 Logo"  width={500} height={500}/>
                <Image src={css} alt="CSS3 Logo"  width={500} height={500}/>
                <Image src={react} alt="React Logo"  width={500} height={500}/>
                <Image src={sass} alt="Sass Logo"  width={500} height={500}/>
                <Image src={ts} alt="TypeScript Logo"  width={500} height={500}/>
                <Image src={redux} alt="Redux Logo"  width={500} height={500}/>
                <Image src={express} alt="Express Logo"  width={500} height={500}/>
                <Image src={node} alt="Node.js Logo"  width={500} height={500}/>
                <Image src={mongo} alt="MongoDB Logo"  width={500} height={500}/>
                <Image src={python} alt="Python Logo"  width={500} height={500}/>
                <Image src={git} alt="Git Logo"  width={500} height={500}/>
                <Image src={svelte} alt="Svelte Logo"  width={500} height={500}/>
                <Image src={next} alt="Next.js Logo"  width={500} height={500}/>
            </div>
            <div className='logo-banner'>
                <Image src={html} alt="HTML5 Logo"  width={500} height={500}/>
                <Image src={css} alt="CSS3 Logo"  width={500} height={500}/>
                <Image src={react} alt="React Logo"  width={500} height={500}/>
                <Image src={sass} alt="Sass Logo"  width={500} height={500}/>
                <Image src={ts} alt="TypeScript Logo"  width={500} height={500}/>
                <Image src={redux} alt="Redux Logo"  width={500} height={500}/>
                <Image src={express} alt="Express Logo"  width={500} height={500}/>
                <Image src={node} alt="Node.js Logo"  width={500} height={500}/>
                <Image src={mongo} alt="MongoDB Logo"  width={500} height={500}/>
                <Image src={python} alt="Python Logo"  width={500} height={500}/>
                <Image src={git} alt="Git Logo"  width={500} height={500}/>
                <Image src={svelte} alt="Svelte Logo"  width={500} height={500}/>
                <Image src={next} alt="Next.js Logo"  width={500} height={500}/>

            </div>
        </div>

        {/* <h1 id='salutation'> */}
          {/* <div className="hand-wave">👋 </div>  */}
          {/* I&apos;m <strong id='name'>Logan</strong>.  */}
        {/* </h1> */}
        
    </div>
    </>
  )
}

export default Salutation;