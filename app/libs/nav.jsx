// import '../styles/nav.scss'
// import SideNav from './sideNav';
// import Image from 'next/image';
// import githubLogo from '/app/assets/logos/github-logo.png';

// import githubLogo2 from '/app/assets/logos/github-icon2.png';
// import linkedinLogo from '/app/assets/logos/linkedin-logo2-nbg.png';
// import instagramLogo from '/app/assets/logos/instagram-logo.png';


function Nav() {
  return (
    <>
      <div className='flex justify-center items-center fixed top-0 left-0 w-full z-50'> {/* //!wrapper */}
        <div className="absolute backdrop-blur-lg w-full h-[5vh]"></div>
        <div className='  
        flex justify-evenly align-center
        bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
        opacity-30 backdrop-blur-lg
        h-[5vh] w-full
        rounded-lg p-1 m-2

        '> {/* //!container */}
          <nav className='
          flex justify-center  md:justify-end
          h-full w-full
          rounded-b-lg'>
            <div className='
            flex justify-around items-center 
            bg-glassOver h-full w-1/2 md:w-1/4
            rounded-lg
            ' >
              <a href='https://github.com/ljn16' target='_blank' className='
                h-2/3 aspect-square
                bg-yellow-600 rounded-md'>
                <div ></div>
              </a>
              <a href='https://www.linkedin.com/in/logan-nelsen/' target='_blank' className='
                  h-2/3 aspect-square
                bg-yellow-600 rounded-md'>
                <div ></div>
              </a>
              <a href='https://www.instagram.com/logan_nelsen/' target='_blank' className='
                h-2/3 aspect-square
                bg-yellow-600 rounded-md'>
                <div ></div>
              </a>
              
            </div>



          </nav>
        </div>
      </div>
    </>
  )
}

export default Nav;