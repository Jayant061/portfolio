import React from "react";
import { useNavigate } from "react-router-dom";
import myPic from "../Assets/pic2.jpg";
import "../StyleSheets/preface.css";
export default function StartPage(){
    const navigate = useNavigate();
    return (
        <div className="preface">
            <div className="text">
                <h1 className="name">JAYANT<br/>THAKUR</h1>
                <h4 className="profession">Software Developer <br/> <br/>Full Stack Web Developer</h4>
                <button className="exploreBtn" onClick={()=>{navigate("/Explore")}}>Explore<span className="rightArrow">➡</span></button>
            </div>
            <div className="picture">
                <img src = {myPic}/>
            </div>
        </div>
    )
}