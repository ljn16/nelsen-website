// import Image from "next/image";
// import alertImage from './assets/icons/alert-icon.png'

// import App from "next/app";
// import './styles/App.scss'
import './globals.css'
import Nav from './libs/nav.jsx'
// import Salutation from './libs/salutation.jsx'
// import SideNav from './libs/sideNav.jsx'
import Biography from './libs/bio.jsx'
import Products from './libs/products.jsx'
import Banner from './libs/banner.jsx'


export default function Home() {
  return (
    <>
    <Nav/>
    
    {/* //!LEFT ---------------------------------------------------*/} 
    <div className='grid grid-cols-[10vw_80vw_10vw]  h-full w-full'>
      <aside className='
      flex flex-col items-center justify-center
      '>
      
      </aside>
      {/* //!CENTER ---------------------------------------------------*/} 
      <div className='
      flex flex-col items-center justify-center
      bg-mainBG rounded-sm border-x border-gray-700
      mt-[10vh]'>
        <Banner/>
        {/* <h1 className='text-[2rem] font-bold'> 👋 I&apos;m Logan.</h1> */}

        <Biography/>
        <Products/>

      </div>

      {/* //!RIGHT ---------------------------------------------------*/}  
      <aside className='
      flex flex-col items-center justify-center
      '>
        
      </aside>

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
