import React from 'react'
import './mystyle.css';

// 1 June 2022
//company name, tool name and help button added and their styles
//mystyle.css file is added for header.js

export default function Header() {
  return (
    <div className="myheader">
    <div className="div-container">

      <div className="div-style companynamestyle">Morgan Stanley</div>
      <div className="div-style toolnamestyle">Subnet Allocation Tool</div>
      <div className="div-style helpbtn">Help</div>
    </div>
    </div>
  )
}
