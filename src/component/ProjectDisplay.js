import React from 'react';
import { useParams } from "react-router-dom";
import { projectlist } from '../helper/ProjectList';
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import {isMobile} from 'react-device-detect';
import Proj7demo from '../assets/Proj7_demo.mp4';
import Proj4demo from '../assets/android_demo.mp4';





function ProjectDisplay() {
  const { id } = useParams();
  const project = projectlist[id];
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} className= {isMobile? 'two': 'one'} alt=""/>
        
        <p>
            <b>Skills</b>: {project.skills}
        </p>

        { project.name === 'Contactless Attendance System' ? <b style={{"cursor": "pointer", "padding":"20px", "fontSize":"25px"}}> <a href = {Proj4demo} target="_blank" rel="noreferrer">View Demo</a></b>: null}

        { project.name === 'Image Segmentation using Java' ? <b style={{"cursor": "pointer", "padding":"20px", "fontSize":"25px"}}> <a href = {Proj7demo} target="_blank" rel="noreferrer">View Demo</a></b>: null}

        { project.name === 'Endless Runner Inspired Unity Game' ? <b onClick = {() => openInNewTab(project.webgl)} style={{"cursor": "pointer", "padding":"20px", "fontSize":"25px"}}> <a>Play the Game</a></b>: null}

        { project.github === '' ? null : <GitHubIcon onClick = {() => openInNewTab(project.github)} style={{"cursor": "pointer"}}/>}
        {console.log(isMobile)}

        
        

    </div>
  );
}

export default ProjectDisplay