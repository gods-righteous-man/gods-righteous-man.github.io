import React from 'react';
import ProjDemo from "../assets/Proj7_demo.mp4";

function Proj7demo() {
  return (
    <div>
        <video width="90%" height="90%" controls>
            <source src="../assets/Proj7_demo.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default Proj7demo