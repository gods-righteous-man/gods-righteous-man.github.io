import React from 'react';
import ProjectItem from './ProjectItem';
import '../styles/Projects.css';
import { projectlist } from '../helper/ProjectList';

function Projects() {
  return (
    <div className='projects'>
      <h1>My personal projects</h1>
      <div className='projectList'>
        {projectlist.map((p, idx) => {
          return <ProjectItem name = {p.name} image = {p.image} idx = {idx}/>
        })}
      </div>
    </div>
  )
}

export default Projects