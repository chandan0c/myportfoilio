import React from 'react'
import "./Contact.css"
function Contact() {
  return <div className='contact' id='contact'>
    <div  >
       <h1  >Contact Me</h1>
       <h3 >
         <a  href='https://www.linkedin.com/in/chandan-giri-9746a6238/' target="_blank" rel="noreferrer">Linkedin</a>
       </h3>
       <h3 >
         <a href='https://github.com/chandan0c' target="_blank" rel="noreferrer">Git Hub</a>
       </h3>
       <h3 >
         {/*<span >chandan0c098@gmail.com</span>*/}
         <a href='https://mail.google.com/mail/u/1/?view=cm&fs=1&to=chandan0c@gmail.com&tf=1' target="_blank" rel="noreferrer">Gmail</a>
       </h3>
       <h3 >
         {/*<span >+91 7441129480</span>*/}
         <a href="tel:7441129480" target="_blank" rel="noreferrer">Contact No :7441129480</a>
       </h3>
       <h2>Designed & Built by <span>Chandan</span> © 2022</h2>
    </div>
    </div>
}

export default Contact
