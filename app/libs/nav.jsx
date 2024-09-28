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
      <div className='flex justify-center items-center fixed top-0 left-0 w-full z-50'>
        <div className='
        flex justify-evenly align-center
        
        bg-glass backdrop-blur-lg
        h-[5vh] w-full
        rounded-lg p-1 m-2
        '>
          <nav className='grid grid-cols-3 gap-4  h-full w-full
          rounded-b-lg'>
            {/* //!LEFT */}
            <div className='
            flex
            rounded-bl-lg
            h-full'> 



            </div>
            {/* //!CENTER */}
            <div className='flex justify-center items-center
            h-full'> 
              <span className='
              bg-yellow-400 p-1 rounded-md opacity-50 text-black
              '> {/* style={{ backgroundColor: 'rgba(255, 255, 0, 0.5)', color: 'black', borderRadius: 5, padding: 5, paddingLeft: 10, paddingRight: 10, margin: 10 }} */}
                
                &zwnj;🚧 Site under construction 🚧&zwnj;
              </span>



            </div>
            {/* //!RIGHT */}
            <div className='
            flex justify-end 
            h-full w-full
            rounded-br-lg'> 
              <div className='
              flex justify-around items-center
              bg-glassOver h-full w-1/4
              rounded-lg
              ' >
                <a href='https://github.com/ljn16' target='_blank' className='
                  relative h-3/4 aspect-square
                  bg-yellow-600 rounded-md'>
                  <div ></div>
                </a>
                <a href='https://www.linkedin.com/in/logan-nelsen/' target='_blank' className='
                  relative h-3/4 aspect-square
                  bg-yellow-600 rounded-md'>
                  <div ></div>
                </a>
                <a href='https://www.instagram.com/logan_nelsen/' target='_blank' className='
                  relative h-3/4 aspect-square
                  bg-yellow-600 rounded-md'>
                  <div ></div>
                </a>
                
              </div>



            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Nav;