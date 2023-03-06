import React from "react";
import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import "../StyleSheets/explore.css";
import Nav from "./Nav";
import github from "../Assets/github.png";
import projectsData from "../Assets/projectsData.json"
import Footer from "./Footer";

const projectItems = projectsData;
const projects = projectItems.map((item,index)=>{
  // liItems stands for texts used as project description.
  const liItems = item.projectDescription.map((list,index)=>{
    if(list.includes("Tech used")){
      return(
        <li key={index}><strong key={index}>{list}</strong></li>
        )}else{
      return(
        <li key={index}>{list}</li>
        )
      }
    })
    return(
      <>
      <div className="project" key={index + "a"}>
        <div className="links" key={index +"b"}>
        <a href={item.siteLink} target = "_blank" key={index+"c"}>{item.ProjectName}</a>
        <a href={item.repoLink} target = "_blank" key={index + "d"}><img src={github} alt = "githubImg" key={index + "f"}/></a>
        </div>
        <ul className="description" key={index + "e"}>
          {liItems}
        </ul>

      </div>
    </>
  )
});

export default function Explore() {
  useEffect(()=>{document.title = "Explore | JAYANT THAKUR"},[])
  return (
    <div className="explore">
      <Nav />
      <div className="projects">
        <h2>PROJECTS</h2>
        {projects}
      </div>
      <Footer />
    </div>
  );
}
