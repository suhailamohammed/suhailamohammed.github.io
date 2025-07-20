import { Link, useLocation } from "react-router-dom";
import './style.css';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="headerBody">
      <div className="headerContent">
        <Link to="/">
            <div className="headerTitle">
            <h2>Suhaila Mohammed</h2>
            </div>
        </Link>
        <div className="headerButtons">
          <Link to="/">
            <button className={currentPath === "/" ? "activeButton" : ""}>Home</button>
          </Link>
          <Link to="/research">
            <button className={currentPath === "/research" ? "activeButton" : ""}>Publications</button>
          </Link>
          <Link to="/projects">
            <button className={currentPath === "/projects" ? "activeButton" : ""}>Projects</button>
          </Link>
          <Link to="/resume">
            <button className={currentPath === "/resume" ? "activeButton" : ""}>Resume</button>
          </Link>
          <Link to="/hobbies">
            <button className={currentPath === "/hobbies" ? "activeButton" : ""}>Hobbies</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
