import React from "react";

export default function Footer(){
    const styles = {
        backgroundColor: "rgb(1, 26, 29)",
        color: "#2ba0e9",
        padding: "20px 0",
        textAlign: "center",
        width:"100%",
        fontSize:"20px",
        fontWeight:"500"

    }
    return(
        <>
        <div className="footer" style = {styles}>
        <p>Made With <span style={{color:"red"}}> ❤ </span> by Jayant Thakur</p>
        </div>
        </>
    )
}