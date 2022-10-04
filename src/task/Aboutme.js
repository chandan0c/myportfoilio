import React from 'react'
import logo from '../../src/images/webdevimg.jpg';
import "./Aboutme.css"
function Aboutme() {
  return (
    <div className='aboutme' id="AboutMe">
         <div className='imginfo'>
            <img src={logo} alt="pagal"/>
        </div>
        <div>
            <h1>About me</h1>
            <h2>
            Full-Stack Web Developer with the ability to learn <br/>and collaborate in rapidly changing environments <br/>and compositions. Worked through 1000+ hours of Bootcamp structure learning JavaScript, Node.Js,<br/> React.Js, MongoDB, Express, HTML5, and CSS3.
            </h2>
        </div>
    </div>
  )
}

export default Aboutme
