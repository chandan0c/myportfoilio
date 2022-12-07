import React from 'react'
import "./Nevbar.css"
function Nevbar(props) {

  return (
    <div className='navbarheader'>
      <div className="nevbar">
         <div>
            <span onClick={()=>{props.handleONclick(1)}} className="chandan">Chandan</span>
         </div>
         <div className='naba'>
            <span onClick={()=>{props.handleONclick(2)}} className="home" >Home</span>
            <span onClick={()=>{props.handleONclick(3)}} >About</span>
            <span onClick={()=>{props.handleONclick(4)}} >Skills</span>
            <span onClick={()=>{props.handleONclick(5)}} >Projects</span>
            <span onClick={()=>{props.handleONclick(6)}} >Contacts</span>
            {/*<span onClick={()=>{props.handleONclick(7)}} className="resume">Resume</span>*/}
            <span><a href="https://drive.google.com/file/d/1QF1HPxybuE5efXEB0SgRZM1UPJVZZcHl/view?usp=share_link" target="_blank" rel="noreferrer">Resume</a></span>
         </div>
     </div>
    </div>
  )
}

export default Nevbar
