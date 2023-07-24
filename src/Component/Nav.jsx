import React from "react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "../StyleSheets/nav.css";
import XMark from "../Assets/xMark.svg"
import Bars from "../Assets/bars-solid.svg"

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
const screenWidth = window.innerWidth;
const [isBar,setIsBar] = useState(true);
const navStyle = {
  position: "absolute",
  right: "0",
  top:"0",
  width: "100vw",
  height: "100%",
  backgroundColor:" rgb(4, 40, 43)",
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  alignItems: "center",
  zIndex:"20"
}
function getIsBar(){
  setIsBar(prevBar=>{return !prevBar});
}
  return (
      <nav>
        <div className="logo">
          <h2 onClick={()=>{navigate("/")}}>JAYANT THAKUR</h2>
        </div>
        <div className="items">
          <img  className = "bars"src={isBar?Bars:XMark} alt="" style ={screenWidth>700?{display:"none"}:!isBar?{backgroundColor:"#2ba0e9"}:{}} onClick = {getIsBar}/>
          <ul className="navItems" style={!isBar?navStyle:{}}>
            <li style={location.pathname === "/Explore" && screenWidth>700?{borderTop:"5px solid #0c344d",paddingTop:"7px"}:location.pathname === "/Explore" && screenWidth<700?{color:"#FFD700"}:{}} onClick={()=>{navigate("/Explore")}}>Explore</li>
            <li style={location.pathname === "/About" && screenWidth>700?{borderTop:"5px solid #0c344d",paddingTop:"7px"}:location.pathname === "/About" && screenWidth<700?{color:"#FFD700"}:{}} onClick={()=>{navigate("/About")}}>About</li>
          </ul>
        </div>
      </nav>
  );
}
