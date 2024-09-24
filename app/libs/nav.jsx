import '../styles/nav.scss'
// import SideNav from './sideNav';
import Image from 'next/image';
import githubLogo from '/app/assets/logos/github-logo.png';
import linkedinLogo from '/app/assets/logos/linkedin-logo.png';


function Nav() {
  return (
    <>
      <nav>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <p style={{ backgroundColor: 'rgba(255, 255, 0, 0.5)', color: 'black', borderRadius: 5, padding: 0, margin: 10 }}>🚧 Site currently under construction. 🚧</p>
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
                <Image src={githubLogo} alt='GitHub Logo' width={96} height={96} />
            </a>
            <a href='https://www.linkedin.com/in/logan-nelsen/' target='_blank'>
                <Image src={linkedinLogo} alt='LinkedIn Logo' width={96} height={96} />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;