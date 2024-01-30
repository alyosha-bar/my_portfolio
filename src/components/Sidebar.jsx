import { Link, NavLink } from 'react-router-dom';
import './sidebar.css'
import ME from '../assets/images/ME.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faBriefcase, faFile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {


    const downloadPdf = () => {
        const pdfFilePath = './assets/CV.pdf';
        const fileName = 'Aleksej.pdf';
    
        fetch(pdfFilePath)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          })
          .catch(error => console.error('Error downloading PDF:', error));
      };


    return ( 
        <>
        <div className="sidebar">
            <Link className='logo' to='/'>
                <img className='logo' src={ME} alt="logo" />
            </Link>
            <nav id='nav-margin'>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                
                <NavLink exact="true" activeclassname="active" className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                
                <NavLink exact="true" activeclassname="active" className='portfolio-link' to='/projects'>
                    <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>

                
                    <a  id='linkedin' 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://www.linkedin.com/in/aleksej-barysnikov-b93426255/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
            
                
                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://github.com/alyosha-bar"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                
                
                    <a 
                        target="_blank" 
                        rel="noreferrer"
                        onClick={downloadPdf}
                    >
                        <FontAwesomeIcon icon={faFile} color="#4d4d4e"/>
                    </a>
                
            </nav>
        </div>
        </>
     );
}
 
export default Sidebar;