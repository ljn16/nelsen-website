// import '../styles/nav.scss'
// import SideNav from './sideNav';
import Image from 'next/image';
import siteLogo from '/app/assets/logos/Hub Logan.png'
import suedeBG from '/app/assets/suedeBG.jpg'

import githubWhite from '/app/assets/nav icons/github-white.png'
import linkedinWhite from '/app/assets/nav icons/linkedin-white.png'
import instagramWhite from '/app/assets/nav icons/instagram-white.png'

import githubBlack from '/app/assets/nav icons/github-black.png'
import linkedinBlack from '/app/assets/nav icons/linkedin-black.png'
import instagramBlack from '/app/assets/nav icons/instagram-black.png'
// import githubLogo from '/app/assets/logos/github-logo.png';

// import githubLogo2 from '/app/assets/logos/github-icon2.png';
// import linkedinLogo from '/app/assets/logos/linkedin-logo2-nbg.png';
// import instagramLogo from '/app/assets/logos/instagram-logo.png';


function NavC2() {
    return (
      <>
        {/* //! nav container */}
        <div className=''></div>
        <div className='
        flex md:h-[115px] justify-end'>
          {/* //! site logo container */}
          <div className= 'fixed top-0 left-0 h-0 w-0 md:left-[35px] md:h-[85px] md:w-[90px]' style={{ backgroundImage: `url(${suedeBG.src})`, borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}></div>
          <div className='
          fixed top-0 left-0 md:left-10
          w-full h-auto md:w-auto
          bg-green-500 text-white text-center pl-1 md:p-0 rounded-b-lg border-t-0 z-10'> 
            <Image className='
            h-10 w-10 md:h-20 md:w-20
            ' src={siteLogo} alt='site logo'/>
          </div>

          {/* //! nav links container */}
          <div className= 'fixed top-0 right-0 h-0 w-0 md:right-[31px] md:h-[85px] md:w-[186px]' style={{ backgroundImage: `url(${suedeBG.src})`, borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}></div>

          <div className='fixed flex
          h-10 w-30 md:h-20 md:w-auto px-1 md:px-2 mr-1 md:mr-9 items-center space-x-2
          md:bg-green-500 md:rounded-b-lg justify-around z-20' >
            <a target='blank' href='https://github.com/ljn16'><Image className='w-6 h-6 md:w-12 md:h-12' src={githubBlack} alt='GitHub Logo' /></a>
            <a target='blank' href='https://www.linkedin.com/in/logan-nelsen/'><Image className='w-6 h-6 md:w-12 md:h-12' src={linkedinBlack} alt='LinkedIn Logo' /></a>
            <a target='blank' href='https://www.instagram.com/logan_nelsen/'><Image className='w-6 h-6 md:w-12 md:h-12' src={instagramBlack} alt='Instagram Logo' /></a>

          </div>
        </div>
      </>
    )
  }
  
  export default NavC2;
  // style={{ borderImage: `url(${suedeBG.src}) 30`}}