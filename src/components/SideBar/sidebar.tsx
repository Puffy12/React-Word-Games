import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import "./index.css";

function Sidebar() {
  return (
        <div className="nav-bar">
        <nav className="different">
            <a href={'/'} className="">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" className='text-xl bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack' />
            </a>
          
        </nav>
        <ul>
            <li>
            <a href="https://www.linkedin.com/in/michael-mehrdadi-342191272/" target="_blank" rel="noopener noreferrer" className='bg-white px-2 py-1 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon"/>
            </a>
            </li>
            <li>
            <a href="https://github.com/Puffy12" target="_blank" rel="noopener noreferrer" className='bg-white px-2 py-1 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon"/>
            </a>
            </li>
            <li>
            <a href="https://www.youtube.com/channel/UC8pHMnOsghOJJOgjaM3-pDw" rel="noopener noreferrer" target="_blank" className='bg-white px-2 py-1 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack'>
                <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" className="anchor-icon"/>
            </a>
            </li>
        </ul>
        </div>

  )
}

export default Sidebar
