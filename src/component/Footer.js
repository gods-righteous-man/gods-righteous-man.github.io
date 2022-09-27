import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/Footer.css';

function Footer() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div className="footer">
        <div className="socialMedia">
            <LinkedInIcon onClick={() => openInNewTab('https://www.linkedin.com/in/gaurav-makasare-780199149/')}/>
            <GitHubIcon onClick={() => openInNewTab('https://github.com/gods-righteous-man')}/>
            <InstagramIcon onClick={() => openInNewTab('https://www.instagram.com/gaurav_makasare/')}/>
        </div>
        <p> &copy; 2022 Gaurav R Makasare A.K.A Gods Rightous Man</p>
        
    </div>
  )
}

export default Footer