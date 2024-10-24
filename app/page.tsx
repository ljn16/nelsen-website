// import Image from "next/image";
// import siteLogo from './assets/logos/Hub Logan.png'
// import suedeBG from 'app/assets/suedeBG.jpg'

// import App from "next/app";
// import './styles/App.scss'
import './globals.css'
// import Nav from './libs/nav.jsx'
// import Nav2 from './libs/navCopy.jsx'
import NavC2 from './libs/navCopy2.jsx'
// import Salutation from './libs/salutation.jsx'
// import SideNav from './libs/sideNav.jsx'
import Biography from './libs/bio.jsx'
import Products from './libs/products.jsx'
// import Banner from './libs/banner.jsx'

import Technologies from './libs/technologies.jsx'

export default function Home() {
  return (
    <>
    {/* <Nav/> */}
    {/* <Nav2/> */}
    <NavC2/>
    <div className='
    
    '></div>



    <div className='
      flex flex-col items-center justify-center
      bg-mainBG rounded-sm 
      mt-[5vh] md:mt-1'>
      <div className='flex flex-col md:flex-row md:space-x-56'>
        <div className='flex md:right-44 md:mr-40'>
          <Biography/>
        </div>
      <Technologies/>
      </div>
      <Products/>


        {/* //! */}
        {/* <Banner/> */}
        {/* <h1 className='text-[2rem] font-bold'> 👋 I&apos;m Logan.</h1> */}

        
        {/* <Products/> */}

      </div>

    {/* <aside></aside>
    <div></div>
    <aside></aside> */}
    <div className='column-wrapper'>
      <div className='LT-col'>
        {/* <SideNav/> */}
        <div className='alert'>
          {/* <Image src={alertImage} alt='alert icon' /> */}
            {/* <p style={{ backgroundColor: 'yellow', color: 'black', borderRadius: 5, padding: 0, margin: 10 }}>🚧 Site currently under construction. 🚧</p> */}
        </div>
      </div>
      <div className='main-col'>
        
        {/* <Salutation/> */}


      </div>
      <div className='RT-col'></div>
    </div>


    </>

  );
}
