// import '../styles/nav.scss'
// import SideNav from './sideNav';
import Image from 'next/image';
// import githubLogo from '/app/assets/logos/github-logo.png';

import githubLogo2 from '/app/assets/logos/github-icon2.png';
import linkedinLogo from '/app/assets/logos/linkedin-logo2-nbg.png';
import instagramLogo from '/app/assets/logos/instagram-logo.png';


function Nav() {
  return (
    <>
      <div className='
      flex justify-evenly align-center
      sticky top-0
      bg-glass backdrop-blur-lg
      h-[5vh] w-full
      rounded-b-lg
      border border-blue-600'>
        <nav className='grid grid-cols-3 gap-4 border border-green-500 h-full w-full'>
          <div className='flex
          border border-orange-500 h-full'>
          </div>
          <div className='flex justify-center
          border border-orange-500 h-full'>
            <span className='
            bg-yellow-400 p-1 m-10 rounded-sm opacity-80
            '> {/* style={{ backgroundColor: 'rgba(255, 255, 0, 0.5)', color: 'black', borderRadius: 5, padding: 5, paddingLeft: 10, paddingRight: 10, margin: 10 }} */}
              &zwnj;🚧 Site under construction 🚧&zwnj;
            </span>
          </div>
          <div className='flex justify-end h-full w-full
          border border-orange-500'>LT
            <div className="relative w-full h-full aspect-square">
              <a href='https://github.com/ljn16' target='_blank' className='border border-green-950'><span><Image src={githubLogo2} alt='GitHub Logo' layout='fill' objectFit='cover'/></span></a>

            </div>
            <a href='https://www.linkedin.com/in/logan-nelsen/' target='_blank' className='border border-green-950'><span><Image src={linkedinLogo} alt='LinkedIn Logo'/></span></a>
            <a href='https://www.instagram.com/logan_nelsen/' target='_blank' className='border border-green-950'><span><Image src={instagramLogo} alt='LinkedIn Logo'/></span></a>
          </div>
        
          <div>  {/* style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} */}

          </div>
          <div className='nav-content 
          border border-green-950 h-full
          '>
            <a href='https://github.com/ljn16' target='_blank' className='border border-green-950'><span>x</span></a>
            <a href='https://www.linkedin.com/in/logan-nelsen/' target='_blank' className='border border-green-950'><span>y</span></a>
            <a href='https://www.instagram.com/logan_nelsen/' target='_blank' className='border border-green-950'><span>z</span></a>
            {/* <ul> */}

              {/* <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#contact'>Contact</a></li> */}
            {/* </ul> */}
            {/* <a href='#home'>X</a>
            <a href='#about'>Y</a>
            <a href='#projects'>Z</a> */}
            <div>
              {/* <SideNav/> */}
            </div>
            <div className='profile-link-icons'>
              <a href='https://github.com/ljn16' target='_blank'>
                  <div>  {/* style={{ width: '4vh', height: '4vh', position: 'relative', marginLeft: '20px'}} */}
                    {/* <Image src={githubLogo2} alt='GitHub Logo' layout='fill' objectFit='contain' /> */}
                  </div>
              </a>
              <a href='https://www.linkedin.com/in/logan-nelsen/' target='_blank'>
                  <div> {/* style={{ width: '4vh', height: '4vh', position: 'relative', marginLeft: '10px'}} */}
                    {/* <Image src={linkedinLogo} alt='LinkedIn Logo' layout='fill' objectFit='contain' /> */}
                  </div>
              </a>

              <a href='https://www.instagram.com/logan_nelsen/' target='_blank'>
                  <div> {/*  style={{ width: '4vh', height: '4vh', position: 'relative', marginLeft: '10px', marginRight: '20px' }} */}
                    {/* <Image src={instagramLogo} alt='LinkedIn Logo' layout='fill' objectFit='contain' /> */}
                  </div>
              </a>
            </div>
          </div>
        </nav>
      </div>
      
    </>
  )
}

export default Nav;