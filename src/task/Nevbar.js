import React from 'react'
import "./Nevbar.css"
function Nevbar(props) {

  return (
    <div>
      <div className="nevbar">
         <div>
            <span onClick={()=>{props.handleONclick(1)}}>Chandan</span>
         </div>
         <div>
            <span onClick={()=>{props.handleONclick(2)}} >Home</span>
            <span onClick={()=>{props.handleONclick(3)}} >About</span>
            <span onClick={()=>{props.handleONclick(4)}} >Skills</span>
            <span onClick={()=>{props.handleONclick(5)}} >Projects</span>
            <span onClick={()=>{props.handleONclick(6)}} >Contacts</span>
            <a onClick={()=>{props.handleONclick(7)}} >Resume</a>
         </div>
     </div>
    </div>
  )
}

export default Nevbar
