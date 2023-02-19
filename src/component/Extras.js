import React from 'react';
import Resume from "../assets/Resume.pdf";
import TC from "../assets/tc.pdf";
import DV from "../assets/dv.pdf";
import BC from "../assets/bc.pdf";
import Transcript from "../assets/Transcripts.pdf";
import '../styles/Extras.css';


function Extras() {
  return (
    <div className='maindiv'>
      <div className='subdiv'>
        <ul>
        <li><a href = {Resume} target = "_blank" rel="noreferrer">View Resume</a></li>
        <li><a href = {Transcript} target = "_blank" rel="noreferrer">View Unofficial Transcript</a></li>
        <li><a href = {BC} target = "_blank" rel="noreferrer">Coursera Blockchain Certificate</a></li>
        <li><a href = {DV} target = "_blank" rel="noreferrer">Coursera Datavisualizations Certificate</a></li>
        <li><a href = {TC} target = "_blank" rel="noreferrer">Coursera Tensorflow with Sagemaker Certificate</a></li>
        </ul>
      </div>
        
    </div>
  )
}

export default Extras