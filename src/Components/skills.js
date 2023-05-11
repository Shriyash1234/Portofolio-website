import './CSS/skills.css'
import * as SiIcons from 'react-icons/si';
function Skills(){
    return(
        <section className="skills-section">
            <h2>Skills</h2>
            <div className="skills">
                <div className="skillset-1">
                    <div className="skill"><SiIcons.SiHtml5 />&nbsp;&nbsp;<p>HTML</p></div>
                    <hr className="line"/>
                    <div className="skill"><SiIcons.SiCss3 />&nbsp;&nbsp;CSS</div>
                    <hr className="line"/>
                    <div className="skill"><SiIcons.SiJavascript />&nbsp;&nbsp;JAVASCRIPT</div>
                    <hr className="line"/>
                    <div className="skill"><SiIcons.SiNodedotjs />&nbsp;&nbsp;Node.js</div>
                    <hr className="line"/>
                </div>
                <div className="skillset-2">
                    <div className="skill"><SiIcons.SiReact />&nbsp;&nbsp;React.js</div>
                    <hr className="line"/>
                    <div className="skill"><SiIcons.SiMongodb />&nbsp;&nbsp;MongoDB</div>
                    <hr className="line"/>
                    <div className="skill"><SiIcons.SiMysql/>&nbsp;&nbsp;SQL</div>
                    <hr className="line"/>
                    <div className="skill"><SiIcons.SiGit />&nbsp;&nbsp;Git</div>
                    <hr className="line"/>
                </div>
            </div>
        </section>
    )
}
export default Skills