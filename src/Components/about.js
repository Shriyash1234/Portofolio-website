import React, { useState } from "react";
import './CSS/about.css'
function About(){
    const [activeButton, setActiveButton] = useState(1);

    function handleButtonClick(buttonIndex) {
        setActiveButton(buttonIndex);
    }
    return(
        <section className='About'>
            <div className='about-me'>
                <h3>A bit</h3>
                <h2>About me</h2>
                <div className='options'>
                <div className={activeButton === 1 ? "active" : ""} onClick={() => handleButtonClick(1)}>
                    <p>Life</p>
                </div>
                <div className={activeButton === 2 ? "active" : ""} onClick={() => handleButtonClick(2)}>
                    <p>Education</p>
                </div>
                <div className={activeButton === 3 ? "active" : ""} onClick={() => handleButtonClick(3)}>
                    <p>Experience</p>
                </div>
            </div>
                <p className={activeButton === 1 ? "visible" : "not-visible"}>Hi, I'm Shriyash Mandavekar and I'm a web developer and student at IIT Gandhinagar. I'm passionate about building intuitive, user-friendly websites and applications, and I'm always looking for new ways to improve my skills and stay up-to-date with the latest technologies and trends.</p>
                <div className={activeButton === 2 ? "visible" : "not-visible"}>
                    <div className="place">
                        <p>Indian Institute of technology, Gandhinagar</p>
                        <p>2020-2024&nbsp;&nbsp;&nbsp;&nbsp;Current CPI:7.63</p>
                    </div>
                    <hr/>
                    <div className="place">
                        <p>St. Paul College of Science, Satara</p>
                        <p>2018-2020&nbsp;&nbsp;&nbsp;&nbsp;Percentage:83.54%</p>
                    </div>
                    <hr/>
                    <div className="place">
                        <p>New English School, Satara</p>
                        <p>2013-2018&nbsp;&nbsp;&nbsp;&nbsp;Percentage:97%</p>
                    </div>
                </div>
                <p className={activeButton === 3 ? "visible" : "not-visible"}>
                    <p className="experience">Summer internship at TCS research and Innovation, Banglore</p>
                    <hr/>
                    <p className="experience">Interface Developer, CRTDH labs, IIT Gandhinagar</p>
                </p>
            </div>
            
            <div className='web-dev-img'>
                <img src={require('./Images/web-dev.jpg')}></img>
            </div>
        </section>
    )
}
export default About