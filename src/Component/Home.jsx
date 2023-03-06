import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import myPic from "../Assets/pic2.jpg";
import "../StyleSheets/home.css";
export default function Home(){
    useEffect(()=>{document.title = "Home | JAYANT THAKUR"},[])
    const navigate = useNavigate();
    return (
        <div className="home">
        <div className="preface">
            <div className="text">
                <h1 className="name">JAYANT<br/>THAKUR</h1>
                <h4 className="profession">Software Developer <br/> <br/>Full Stack Web Developer</h4>
                <button className="exploreBtn" onClick={()=>{navigate("/Explore")}}>Explore<span className="rightArrow">➡</span></button>
            </div>
            <div className="picture">
                <img src = {myPic} alt = ""/>
            </div>
        </div>
        </div>
    )
}