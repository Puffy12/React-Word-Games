import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import "./index.css";

function Sidebar() {
  return (
        <div className="nav-bar">
        <nav>
            <NavLink to={'/'}>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink to={'/contact'}>
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
            <a href="https://www.linkedin.com/in/michael-mehrdadi-342191272/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon"/>
            </a>
            </li>
            <li>
            <a href="https://github.com/Puffy12" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon"/>
            </a>
            </li>
            <li>
            <a href="https://www.youtube.com/channel/UC8pHMnOsghOJJOgjaM3-pDw" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" className="anchor-icon"/>
            </a>
            </li>
        </ul>
        </div>

  )
}

export default Sidebar
