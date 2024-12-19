import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
        }
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, my name is Gaurav</h2>
            <div className='prompt'>
                <p>A software engineer with a passion for learning and creating</p>
                <LinkedInIcon onClick={() => openInNewTab('https://www.linkedin.com/in/gaurav-makasare-780199149/')} style={{"cursor": "pointer"}}/>
                <GitHubIcon onClick={() => openInNewTab('https://github.com/gods-righteous-man')} style={{"cursor": "pointer"}}/>
                <a href='mailto: makasare@usc.edu'><EmailIcon /></a>
            </div>
        </div>
        <div className='skills'>
            <h1><u>Skills</u></h1>
            <ol className='list'>
                <li className='item'>
                    <h2>
                        Languages:
                    </h2>
                    <span>Go, Python, Java, C, C++, C#, Javascript, Typescript, SQL, HTML, CSS</span>
                </li>
                <li className='item'>
                    <h2>
                        Databases:
                    </h2>
                    <span>MySQL, SQLite, MongoDB, Amazon DynamoDB, Neo4j</span>
                </li>
                <li className='item'>
                    <h2>
                        ML / Data Science:
                    </h2>
                    <span>Tensorflow, Sklearn, Pandas, Numpy, Data Visualiztion, Statistical Analysis </span>
                </li>
                <li className='item'>
                    <h2>
                        Tech-stack:
                    </h2>
                    <span>MERN, Angular, Docker, Kubernetes, Nginx, REST, AWS, Android Studio, Blockchain, Django, Flask, Tensorflow, NoSql, Git, Linux, Unity</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home