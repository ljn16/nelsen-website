import '../styles/section.scss'
import Salutation from './salutation.jsx'



function Biography() {


  return (
    <>
      <div className='section'>
        <h2>About Me</h2>
        <p>I am a software engineer with a passion for building innovative, intuitive full-stack applications to solve real-world problems with user psychology/cognition in mind. A broad range of experience using React, SCSS, Node.js, SQL/NoSQL, and more.</p>

        <Salutation/>
      </div>
    </>
  )
}

export default Biography;