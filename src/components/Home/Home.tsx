import { Link } from "react-router-dom";
import { faW, faHouse, faQuestionCircle, faS, faH } from '@fortawesome/free-solid-svg-icons'; //faMagnifyingGlass, faMemory, faTerminal, faBoxOpen, faW, faFingerprint,
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../SideBar/sidebar';
import "./Home.css"; // Import your CSS file
import Footer from "../SideBar/footer";

const HomeMenu = () => {
  return (
    <>
      <Sidebar/>
      <div className="App">
        <div>
          <div className="header-container">
            <h1>Word Games</h1>
          </div>
          <div className="challenge-container challenge-grid">
            <div className="challenge-row top-row">
              <Link className="challenge-item " to={"/wordle"}>
                <FontAwesomeIcon icon={faW} size="3x" className="icon" />
              </Link>
              <Link className="challenge-item " to={"/crossword"}>
                <FontAwesomeIcon icon={faS} size="3x" className="icon" />
              </Link>
              <Link className="challenge-item " to={"/hangman"}>
                <FontAwesomeIcon icon={faH} size="3x" className="icon" />
              </Link>
            </div>
            <div className="challenge-row bottom-row">
              <Link className="challenge-item " to={"/"}>
                <FontAwesomeIcon icon={faHouse} size="3x" className="icon" />
              </Link>
              <Link className="challenge-item " to={"/about"}>
                <FontAwesomeIcon icon={faQuestionCircle} size="3x" className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HomeMenu;
