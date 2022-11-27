import React from 'react'
import "./Nevbar.css"
function Nevbar(props) {

  return (
    <div>
      <div className="nevbar">
         <div>
            <span onClick={()=>{props.handleONclick(1)}} className="chandan">Chandan</span>
         </div>
         <div className='naba'>
            <span onClick={()=>{props.handleONclick(2)}} >Home</span>
            <span onClick={()=>{props.handleONclick(3)}} >About</span>
            <span onClick={()=>{props.handleONclick(4)}} >Skills</span>
            <span onClick={()=>{props.handleONclick(5)}} >Projects</span>
            <span onClick={()=>{props.handleONclick(6)}} >Contacts</span>
            {/*<span onClick={()=>{props.handleONclick(7)}} className="resume">Resume</span>*/}
            <span><a href="https://drive.google.com/file/d/1LANcQgtPwNwQjUCqvEms8qtDBXquUGRX/view?usp=sharing" target="_blank">Resume</a></span>
         </div>
     </div>
    </div>
  )
}

export default Nevbar
