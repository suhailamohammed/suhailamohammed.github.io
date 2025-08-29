import { Link, useLocation } from "react-router-dom";
import './style.css';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="headerBody">
      <div className="headerContent">
        <div className="headerButtons">
          <Link to="/">
            <button className={currentPath === "/" ? "activeButton" : ""}>Home</button>
          </Link>
          <Link to="/academics">
            <button className={currentPath === "/academics" ? "activeButton" : ""}>Academics</button>
          </Link>
          <Link to="/projects">
            <button className={currentPath === "/projects" ? "activeButton" : ""}>Projects</button>
          </Link>
          <Link to="/experience">
            <button className={currentPath === "/experience" ? "activeButton" : ""}>Experience</button>
          </Link>
          {/* <Link to="/hobbies">
            <button className={currentPath === "/hobbies" ? "activeButton" : ""}>Hobbies</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
