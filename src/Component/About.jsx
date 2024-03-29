import React from "react";
import { useState,useEffect } from "react";
import Nav from "./Nav";
import "../StyleSheets/about.css"
import academicData from "../Assets/academicData.json"
import loadingIcon from "../Assets/loading-loop.svg";
import github from "../Assets/github.png"
import linkedin from "../Assets/linkedin.png"
import emailjs from '@emailjs/browser';
import Footer from "./Footer";

export default function About() {
    useEffect(()=>{
        document.title = "About | JAYANT THAKUR";
    },[])
    const [formData,setFormData] = useState({name:"",email:"",message:""});
    function handleChange(event){
        setFormData(prevFormData=>{return{...prevFormData,[event.target.name]:event.target.value}})
    }
    const [popupMessage,setPopupMessage] = useState();
    const [popupVisibility,setPopupVisibility] = useState(false);
    const [loading, setLoading] = useState(false);
    const [popupStyle,setPopupStyle] = useState({})

     function handleSubmit(event){
        event.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_0quap5o', 'template_qabh1yn',event.target, '4gSKqkuNuFUL_yPpm')
        .then((result) => {
            // window.alert("Message has been sent Successfully")
            setPopupVisibility(true);
            setLoading(false);
            setPopupMessage("Message has sent Successfully ✔");
            setPopupStyle({color:"#0ebb02",border:"2px solid #0ebb02"})
        }, (error) => {
            // console.log(error.text);
            setLoading(false);
            setPopupVisibility(true);
            setPopupMessage("Message sent failed ✖");
            setPopupStyle({color:"#f44336", border:"2px solid #f44336"})


        });
    }
    const academics = academicData.degrees;
    const academicContainer = academics.map((academic,index)=>{
        let boardText = academic.board?"Board : " :" "
        return(
            <div className="academic" key={index}>
                <h4>{academic.programme}</h4>
                <p>{academic.instituteName}</p>
                <p>{boardText} {academic.board}</p>
                <p>Academic year : {academic.year}</p>
                <p>Score : {academic.score}</p>
            </div>
        )
    })
    const skills = academicData.skills;
    const skillsContainer = skills.map((skill,index)=>{
        return(
            <li className="skill" key={index}>{skill}</li>
        )
    });
    const workExperiences = academicData?.workExperience?.map((experience, index) => {
        const description = experience?.description?.map((desc, ind) => {
            return (
                <li className="desc" key={`experience_${index}_desc_${ind}`}>{desc}</li>
            );
        });
        return (
            <div className="workExperience" key={`experience_${index}`}>
                <h3>{experience.company}</h3>
                <h4>{experience?.role}</h4>
                <p>{experience?.range}</p>
                <div className="descriptions">{description}</div>
            </div>
        );
    });
    
  return (
    <>
         <div className="popup" style={popupVisibility ? popupStyle:{display:"none"}}>
        <p>{popupMessage}</p>
        <p onClick={()=>{setPopupVisibility(false)}} style={{cursor:"pointer",color:"#0c344d", fontWeight:"600",fontSize:"18px"}}>✖</p>
        </div>
      <Nav />
      <div className="about" onClick={()=>{setPopupVisibility(false)}}>
        <div className="intro">
        <h2>About Me</h2>
        <p>
          Ambitious to build a career with an organization that requires
          teamwork and encourages diligence. Seeking a role in which I can apply
          my knowledge and skills in project with strict adherence to achieving
          the organizational goals.
        </p>
        </div>
        <div className="workExperiences">
            <h2>Prior Work Experience</h2>
            <div className="experiences">
            {workExperiences}
            </div>
        </div>
        <div className="careerHeading">
        <h2>Academic Career</h2>
        <div className="academicCareer">
            {academicContainer}
        </div>
        </div>
        <div className="skills">
            <h2>My Skills</h2>
        <ul>
            {skillsContainer}
        </ul>
        </div>
        <div className="contact">
            <h2>Connect With Me</h2>
            <div className="contactLinks">
            <a href="https://github.com/Jayant061"><img src={github}/></a>
            <a href="https://www.linkedin.com/in/jayant-thakur-582a961ba/"><img src={linkedin}/></a>
            </div>
        </div>
        <div className="getInTouch">
            <h2>Get in Touch</h2>
            <p>
                For service enquiries and collaborations please contact me below and leave a link 
                to your website or portfolio. I am looking forward to hearing from you.
            </p>
            <form onSubmit={handleSubmit} method = "post">
                <input type="text" name="name" placeholder="Name"  onChange={handleChange} value = {formData.name} required/>
                <input type="email" name="email" placeholder="Email"  onChange={handleChange} vlaue = {formData.email}required/>
                <textarea name="message" cols="50" rows="8" placeholder="Message" onChange={handleChange} value = {formData.message} required/>
                <button className="submitBtn">{!loading?"Submit":
                <img src={loadingIcon} alt="loading Icon" style={{width:"20px"}}/>}
                </button>
            </form>

        </div>
      </div>
      <Footer/>
    </>
  );
}
