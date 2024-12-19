import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                className='vertical-timeline-element--education'
                date = 'Jul 2023 - Present'
                iconStyle={{background: "#e9d35b", color: "#fff" }}
                icon = {<WorkIcon />}
            >
                <h3 className='vertical-timeline-element--title'>Software Engineer</h3>
                <h4 className='vertical-timeline-element--subtitle'>Organization: State Street</h4>
                <p>Working on FX Sales and Trading application</p>
                <ul>
                    <li>Responsible for developing trading applications in React Js.</li>
                    <li>Maintaining the legacy applications built on the .NET Framework.</li>
                    {/* <li>Provide</li> */}
                </ul>
            </VerticalTimelineElement>
        <VerticalTimelineElement 
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                className='vertical-timeline-element--education'
                date = 'Aug 2022 - May 2023'
                iconStyle={{background: "#e9d35b", color: "#fff" }}
                icon = {<WorkIcon />}
            >
                <h3 className='vertical-timeline-element--title'>Teaching Assistant - University of Southern California</h3>
                <h4 className='vertical-timeline-element--subtitle'>Course: Blockchain: Decentralize Applications</h4>
                <p>Worked with Prof. Boyuan Xu for the Information Technology Department for managing the coursework of the respective course</p>
                <ul>
                    <li>Held office hours for explaining and resolving conceptual doubts</li>
                    <li>Graded assigments and tests</li>
                    <li>Provided feedback of the overall class performance to the Professor</li>
                </ul>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date = 'Jan 2021 - May 2021'
                iconStyle={{background: "#e9d35b", color: "#fff" }}
                icon = {<WorkIcon />}
            >
                <h3 className='vertical-timeline-element--title'>Course Producer - University of Southern California</h3>
                <h4 className='vertical-timeline-element--subtitle'>Course: Blockchain: Decentralize Applications</h4>
                <p>Worked under the supervision of Prof. Boyuan Xu for the Information Technology Department</p>
                <ul>
                    <li>Graded assigments and tests</li>
                    <li>Helped students with programming related doubts</li>
                    <li>Helped students with their doubts with weekly office hours</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date = 'Aug 2021 - May 2023'
                iconStyle={{background: "#3e497a", color: "#fff" }}
                icon = {<SchoolIcon />}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            >
                <h3 className='vertical-timeline-element--title'>Universtiy of Southern California, Los Angeles, California, United States</h3>
                <p>Masters Degree in Computer Science - <b>Gpa: 3.54/4</b></p>
                <p><b>Relevant courses:</b> Algorithms, Database Systems, Machine Learning for Data Science, Web Technologies, Adavanced Mobile Devices and Gaming Consoles, Multimedia System Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                className='vertical-timeline-element--education'
                date = 'Sep 2019 - Mar 2020'
                iconStyle={{background: "#e9d35b", color: "#fff" }}
                icon = {<WorkIcon />}
            >
                <h3 className='vertical-timeline-element--title'>Software Development Intern</h3>
                <h4 className='vertical-timeline-element--subtitle'>Company: Eiosys Pvt Ltd</h4>
                <p>Worked on a project for enhancing image quality for ecommerce products using Python and OpenCV.</p>
                <ul>
                    <li>Collaborated with a team of 3 to implement the Gaussian mixture model for image foreground and background segmentation.</li>
                    <li>Implemented Google’s Neural Image Assessment algorithm (NIMA) for generating a feedback rating on images between 1 to 10 for testing the quality of results produced.</li>
                    <li>Achieved 60 % improvement in image rating with NIMA.</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date = '2016 - 2020'
                iconStyle={{background: "#3e497a", color: "#fff" }}
                icon = {<SchoolIcon />}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            >
                <h3 className='vertical-timeline-element--title'>Fr. Conceicao Institute of Technology, Mumabi Maharashtra, India</h3>
                <p>Bachelors Degree in Computer Engineering - <b>Gpa: 3.81/4</b></p>
                <p><b>Relevant Courses: </b>Operating Systems, Data Structures, Machine Learning, Aritificial Intelligence, Computer Systems Architecture, Advanced Algorithms, Human Machine Interactions</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date = '2014 - 2016'
                iconStyle={{background: "#3e497a", color: "#fff" }}
                icon = {<SchoolIcon />}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                
            >
                <h3 className='vertical-timeline-element--title'>MH High School & Jr College, Thane, Maharashtra, India</h3>
                <p>Junior College Degree in Science</p>
            </VerticalTimelineElement>
            
            
            
            
        </VerticalTimeline>
    </div>
  )
}

export default Experience