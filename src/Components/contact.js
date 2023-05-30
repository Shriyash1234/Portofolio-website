import './CSS/contact.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Contact(){
    return(
        <section className='Contact-me'>
        <div className="background">
            <div className="container">
                <div className="screen">
                <div className="screen-header">
                    <div className="screen-header-left">
                    <div className="screen-header-button close"></div>
                    <div className="screen-header-button maximize"></div>
                    <div className="screen-header-button minimize"></div>
                    </div>
                    <div className="screen-header-right">
                    <div className="screen-header-ellipsis"></div>
                    <div className="screen-header-ellipsis"></div>
                    <div className="screen-header-ellipsis"></div>
                    </div>
                </div>
                <div className="screen-body">
                    <div className="screen-body-item left">
                    <div className="app-title">
                        <span>CONTACT</span>
                        <span>Me</span>
                    </div>
                    <div className="social-media-handles">
                        <span>
                            <a target='blank' href='https://www.facebook.com/shriyash.mandavekar/'><FontAwesomeIcon className="fa-brands fb" icon={faFacebookF} /></a>
                            <a target='blank' href='https://www.instagram.com/shriyashmandavekar/'><FontAwesomeIcon className="fa-brands insta" icon={faInstagram} /></a> 
                            <a target='blank' href='https://www.linkedin.com/in/mandavekar-shriyash-838398227/'><FontAwesomeIcon className="fa-brands linkedin" icon={faLinkedin} /></a>
                            <a target='blank' href='https://github.com/Shriyash1234'><FontAwesomeIcon className="fa-brands youtube" icon={faGithub} /></a>
                        </span>
                    </div>
                    <div className="app-contact">CONTACT INFO : +91 9021709793</div>
                    </div>
                    <div className="screen-body-item">
                    <form action="mailto:mandavekar.shriyash@iitgn.ac.in" method="post" target="_top" enctype="text/plain">
                    <div className="app-form">
                        <div className="app-form-group">
                        <input className="app-form-control" placeholder="NAME" value="Shriyash Mandavekar"/>
                        </div>
                        <div className="app-form-group">
                        <input className="app-form-control" placeholder="EMAIL"/>
                        </div>
                        <div className="app-form-group">
                        <input className="app-form-control" placeholder="CONTACT NO"/>
                        </div>
                        <div className="app-form-group message">
                        <input className="app-form-control" placeholder="MESSAGE"/>
                        </div>
                        <div className="app-form-group buttons">
                        <button className="app-form-button">CANCEL</button>
                        <button className="app-form-button">SEND</button>
                        </div>
                    </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </section>  
    )
}
export default Contact