import Header from "./header";
import About from "./about";
import './CSS/home.css'
import Skills from "./skills";
import Work from "./work";
import Contact from "./contact";
function Home(){
    return(
        <div className="Home">
            <Header/>
            <div className="content"> 
                <div className="photo">
                    <img class='image' src={require('./Images/Shriyash2.jpg')}></img>
                </div>
                <div className="Name-desc">
                    <div className="pop-up">
                        <p>Hello, I am</p>
                        <div className="triangle"></div>
                    </div>
                    <div className="name">
                        <p>Mr. Shriyash Mandavekar</p>
                    </div>
                    <div className="profession">
                        <p>A web developer and student</p>
                    </div>
                    <div className="buttons-home">
                        <a href="https://drive.google.com/file/d/1liQKWblbIX3WPGwSwZJ-e30Kn0W6PeM6/view?usp=sharing" target="_blank"><p className="download">Download CV</p></a>
                        <p className="work">My Work</p>
                    </div>
                </div>
            </div>
            <About/>
            <Skills/>
            <Work/>
            <Contact/>
        </div>
    )
}
export default Home;