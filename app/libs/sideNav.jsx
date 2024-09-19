import '../styles/sideNav.scss'


function SideNav() {
    function openNav() {
        document.getElementById("side-nav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("side-nav").style.width = "0";
      }

  return (
    <>
      <div>
        <div className="side-nav" id='side-nav'>
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <br/>
            {/* <a href="#">Wifi Speed Test</a> */}
            {/* <a href="#">Outline HTML Elements</a> */}
            <a href="#">Coming soon!</a>
        </div>
        <span style={{fontSize: '20px', cursor: 'pointer'}} onClick={openNav}>&#9776; Toolbox</span>
      </div>
    </>
  )
}

export default SideNav;