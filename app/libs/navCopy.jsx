// import '../styles/nav.scss'
// import SideNav from './sideNav';
// import Image from 'next/image';
// import githubLogo from '/app/assets/logos/github-logo.png';

// import githubLogo2 from '/app/assets/logos/github-icon2.png';
// import linkedinLogo from '/app/assets/logos/linkedin-logo2-nbg.png';
// import instagramLogo from '/app/assets/logos/instagram-logo.png';


function Nav2() {
  return (
    <>
      <div className="
      w-full h-[5vh] 
      fixed top-0 left-0
      flex
      bg-transparent
      border-b border-gray-700
      ">
        <div>
          <span className="text-2xl text-white
          border border-gray-700
          ">Hub Logan</span>
          <div className="
          border border-gray-700
          "> 
            <a href=''><span>LI</span></a>
            <a href=''><span>GH</span></a>
            <a href=''><span>Insta</span></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav2;