import React from 'react'
import "./Nevbar.css"
function Nevbar(props) {

  return (
    <div>
      <div className="nevbar">
         <div>
            <a href="" onClick={()=>{props.handleONclick(1)}}>Chandan</a>
         </div>
         <div>
            <a onClick={()=>{props.handleONclick(2)}} href="">Home</a>
            <span onClick={()=>{props.handleONclick(3)}} href="">About</span>
            <span onClick={()=>{props.handleONclick(4)}} href="">Skills</span>
            <span onClick={()=>{props.handleONclick(5)}} href="">Projects</span>
            <span onClick={()=>{props.handleONclick(6)}} href="">Contacts</span>
            <a onClick={()=>{props.handleONclick(7)}} href="">Resume</a>
         </div>
     </div>
    </div>
  )
}

export default Nevbar
