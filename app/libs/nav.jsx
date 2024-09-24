import '../styles/nav.scss'
// import SideNav from './sideNav';
// import Image from 'next/image';
// import githubLogo from '/app/assets/logos/github-logo.png';
// import linkedInLogo from '/app/assets/logos/linkedIn-logo.png';


function Nav() {
  return (
    <>
      <nav>
        <div className='nav-content'>
          {/* <a href='#home'>X</a>
          <a href='#about'>Y</a>
          <a href='#projects'>Z</a> */}
          <div>
            {/* <SideNav/> */}
          </div>
          <div className='profile-link-icons'>
            <a href='https://github.com/ljn16' target='_blank'>
                {/* <Image src={githubLogo} alt='GitHub Logo' width={96} height={96} /> */}
            </a>
            <a href='https://www.linkedin.com/in/logan-nelsen/' target='_blank'>
                {/* <Image src={linkedInLogo} alt='LinkedIn Logo' width={96} height={96} /> */}
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;