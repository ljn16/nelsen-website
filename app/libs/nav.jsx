import '../styles/nav.scss'
// import SideNav from './sideNav';
import Image from 'next/image';
// import githubLogo from '/app/assets/logos/github-logo.png';

import githubLogo2 from '/app/assets/logos/github-icon2.png';
import linkedinLogo from '/app/assets/logos/linkedin-logo2-nbg.png';
import instagramLogo from '/app/assets/logos/instagram-logo.png';


function Nav() {
  return (
    <>
      <nav>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <p style={{ backgroundColor: 'rgba(255, 255, 0, 0.5)', color: 'black', borderRadius: 5, padding: 5, paddingLeft: 10, paddingRight: 10, margin: 10 }}>&zwnj;🚧 Site under construction 🚧&zwnj;</p>
        </div>
        <div className='nav-content'>
          {/* <a href='#home'>X</a>
          <a href='#about'>Y</a>
          <a href='#projects'>Z</a> */}
          <div>
            {/* <SideNav/> */}
          </div>
          <div className='profile-link-icons'>
            <a href='https://github.com/ljn16' target='_blank'>
                <div style={{ width: '4vh', height: '4vh', position: 'relative', marginLeft: '20px'}}>
                  <Image src={githubLogo2} alt='GitHub Logo' layout='fill' objectFit='contain' />
                </div>
            </a>
            <a href='https://www.linkedin.com/in/logan-nelsen/' target='_blank'>
                <div style={{ width: '4vh', height: '4vh', position: 'relative', marginLeft: '10px'}}>
                  <Image src={linkedinLogo} alt='LinkedIn Logo' layout='fill' objectFit='contain' />
                </div>
            </a>

            <a href='https://www.instagram.com/logan_nelsen/' target='_blank'>
                <div style={{ width: '4vh', height: '4vh', position: 'relative', marginLeft: '10px', marginRight: '20px' }}>
                  <Image src={instagramLogo} alt='LinkedIn Logo' layout='fill' objectFit='contain' />
                </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;