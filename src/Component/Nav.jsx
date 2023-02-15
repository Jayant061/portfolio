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
console.log(screenWidth);
const [isBar,setIsBar] = useState(true);
const navStyle = {
  position: "absolute",
  right: "0",
  width: "100vw",
  height: "100%",
  backgroundColor:" rgb(4, 40, 43)",
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  alignItems: "center",
  zIndex:"20"
}
// const[styleListExplore,setStyleListExplore] = useState({});
// if(screenWidth<700 && location.pathname === "/Explore"){
  // setStyleListExplore({
    // color:"#FFD700"
  // })
// }
// else if(screenWidth>700 && location.pathname === "/Explore"){
  // setStyleListExplore({borderTop:"5px solid #0c344d",paddingTop:"7px"})
// }
// else{
  // setStyleListExplore({});
// }
// const[styleListAbout,setStyleListAbout] = useState();
// if(screenWidth<700 && location.pathname === "/About"){
  // setStyleListAbout({
    // color:"#FFD700"
  // })
// }
// else if(screenWidth>700 && location.pathname === "/About"){
  // setStyleListAbout({borderTop:"5px solid #0c344d",paddingTop:"7px"})
// }
// else{
  // setStyleListAbout({});
// }

function getIsBar(){
  setIsBar(prevBar=>{return !prevBar});
}
  return (
      <nav>
        <div className="logo">
          <h2>JAYANT THAKUR</h2>
        </div>
        <div className="items">
          <img  className = "bars"src={isBar?Bars:XMark} alt="" style ={screenWidth>700?{display:"none"}:{}} onClick = {getIsBar}/>
          <ul className="navItems" style={!isBar?navStyle:{}}>
            <li style={location.pathname === "/Explore" && screenWidth>700?{borderTop:"5px solid #0c344d",paddingTop:"7px"}:{}} onClick={()=>{navigate("/Explore")}}>Explore</li>
            <li style={location.pathname === "/About" && screenWidth>700?{borderTop:"5px solid #0c344d",paddingTop:"7px"}:{}} onClick={()=>{navigate("/About")}}>About</li>
          </ul>
        </div>
      </nav>
  );
}
