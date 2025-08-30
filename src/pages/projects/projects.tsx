import React from "react";
import "./styles.css";
import Img2 from "../../assets/student_enrollment.png";
import Img3 from "../../assets/peer_counselling.png";
import Img4 from "../../assets/weather_forecast.png";
import Img5 from "../../assets/targeted_coupon_chaldal.png";
import Img6 from "../../assets/mp_detection.png";
import Img1 from "../../assets/8_puzzle.jpg";

import { FaGithub, FaTags, FaUserFriends, FaLaptopCode, FaVideo, FaFileAlt, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectItemProps {
  title: string;
  description: string;
  tools: string[];
  collaborators?: string[] | null;
  githubLink?: string | null;
  colabLink?: string | null;
  presentationLink?: string | null;
  reportLink?: string | null;
  image?: string | null;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  tools,
  collaborators,
  githubLink,
  colabLink,
  presentationLink,
  reportLink,
  image,
}) => (
  <div className="project-card">
    <div className="project-card-content">
      <h3 className="project-card-title">{title}</h3>
      {image && (
        <div className="project-card-image-container">
          <img src={image} alt={title} className="project-card-image" />
        </div>
      )}
      <p className="project-card-description">{description}</p>
      <div className="project-card-links">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
        )}
        {colabLink && (
          <a href={colabLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaLaptopCode size={20} />
            <span>Colab</span>
          </a>
        )}
        {presentationLink && (
            <a href={presentationLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaVideo size={20} />
            <span>Presentation</span>
            </a>
        )}
        {reportLink && (
            <a href={reportLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaFileAlt size={20} />
            <span>Report</span>
            </a>
        )}
      </div>
      <div className="project-card-tags">
        <FaTags />
        {tools.map((tool, i) => (
          <span key={i} className="tool-tag">{tool}</span>
        ))}
      </div>
      {collaborators && collaborators.length > 0 && (
        <div className="project-card-collaborators">
          <FaUserFriends size={16} />
          <span className="collaborators-text">{collaborators.join(", ")}</span>
        </div>
      )}
    </div>
  </div>
);

class Projects extends React.Component {
  render() {
    const projectData = [
  {
    title: "Detection of Microplastic in Water using CNN",
    description:
      "Developed a system to identify microplastics, microfibres, and wood debris in microscope samples. Using transfer learning on a MobileNetV2 convolutional neural network with a small dataset, the model achieved 63.9% mAP, 77% precision, and 65% recall. The project demonstrates the potential of automated detection, but real-world samples contain more impurities, so combining this approach with methods like fluorescence microscopy is recommended for more reliable results.",
    tools: ["Python", "MobileNetV2", "CNN", "OpenCV", "Microscope"],
    // githubLink: "https://github.com/your-username/microplastic-detection",
    // colabLink: "https://colab.research.google.com/drive/your-colab-notebook-id",
    presentationLink: "https://drive.google.com/file/d/1pj8TWBwP4ntKxc2tDm05LKy1aMx4PoUL/view?usp=sharing",
    reportLink: "https://drive.google.com/file/d/19aerQzQT6PdiJtdUlFi-2ELHninm7FFo/view?usp=sharing",
    image: Img6,
    collaborators: ["Fahim Ahmed"]
  },
  {
    title: "Call Spam Filtering System using Redis",
    description:
      "Designed and implemented a highly efficient call filtering system for Chaldal to filter out phone numbers which already has been part of any campaigns. The system leveraged Redis and incorporated a Bloom filter to quickly check phone numbers against known lists. This solution successfully reduced spam calls by 90%, significantly improving user experience, and lowered operational overhead by automating a previously manual process.",
    tools: ["C#", ".Net", "Redis", "Bloom Filter", "Chaldal Ltd"],
    githubLink: null,
    colabLink: null,
    presentationLink: null,
    reportLink: null,
    image: null,
    collaborators: ["Nion, Software Engineer L3"]
  },
  {
    title: "Targeted Coupons for Chaldal Customers",
    description:
      "Led frontend development for a high-priority project targeted coupons for Chaldal, with collaboration between Customer Experience, Operations, and Product teams. The feature included Free Delivery, Percentage Off, and Buy One Get One campaigns across Web and mobile apps. I also contributed to the backend by designing APIs and implementing validation logic. The project launched targeted campaigns in 2024 and boosted sales by 20%.",
    tools: ["React", "TypeScript", "C#", ".Net", "MySql", "Chaldal Ltd"],
    githubLink: null,
    colabLink: null,
    presentationLink: null,
    reportLink: null,
    image: Img5,
    collaborators: ["Tabkir, SE L2", "Samudro, SE L4" , "Siam, SE L1", "Mutasim, SE L3"]
  },
  {
    title: "8-puzzle sliding problem with A* search algorithm",
    description:
      "Developed a program to solve the 8-puzzle problem using the A* search algorithm with the misplaced tiles heuristic. The solver efficiently finds the optimal solution by generating possible moves, calculating heuristic costs for each state, and prioritizing states with the lowest total cost while avoiding revisits.",
    tools: ["Python", "Search Algorithm", "Heuristic"],
    githubLink: "https://github.com/suhailamohammed/8-Puzzle-Problem",
    colabLink: null,
    presentationLink: null,
    reportLink: null,
    image: Img1,
    collaborators: []
  },
  {
    title: "Weather forecast",
    description:
      "Developed a dynamic website that provides 5-day weather forecasts using PHP and the OpenWeatherMap API. The site allows users to enter a city or location and retrieves real-time weather data, including temperature, humidity, wind speed, and weather conditions.",
    tools: ["HTML", "CSS", "PHP"],
    githubLink: "https://github.com/suhailamohammed/Weather-Forecast-Web-Application",
    colabLink: null,
    presentationLink: null,
    reportLink: null,
    image: Img4,
    collaborators: []
  },
  {
    title: "Peer Counselling Platform",
    description:
      "Designed the architecture and developed a web-based platform for peer counselling with real-time chat, built using HTML, CSS, and JavaScript. The platform is designed to support AI-based content monitoring to detect and flag inappropriate messages, ensuring a safe environment for users—planned for future implementation.",
    tools: ["HTML", "Javascript", "CSS", "AI", "Real-time Chat"],
    githubLink: "https://github.com/treeDweller98/Peer-Counselling-Platform",
    colabLink: null,
    presentationLink:null,
    reportLink: null,
    image: Img3,
    collaborators: ["Fahim Ahmed", "Shafayat Ahmed"]
  },
  {
    title: "Student Enrollment System",
    description:
      "Developed a fully integrated web platform for the officials of Independent University, Bangladesh (IUB) to manage and analyze yearly institutional data. The system tracks student enrollment, course distribution, seats per class, sections, past student enrollment data, revenue, and losses. The platform provides secure access for authorized users, dynamic dashboards for visualizing trends, and CRUD functionalities for updating records.",
    tools: ["Python", "Django", "MySQL"],
    githubLink: "https://github.com/shafayat1004/Student-Enrollment-Analysis-System",
    colabLink: null,
    presentationLink: "https://www.youtube.com/watch?v=olExNtIXbC8&ab_channel=Shafayat",
    reportLink: null,
    image: Img2,
    collaborators: ["Shafayat Ahmed", "Fahim Ahmed"]
  }
];

    return (
      <div className="projects-container">
        <h2 className="projects-heading">Projects</h2>
        <p className="topDescription">
            Some of my projects has been shown here. To view all of my work, please visit my 
            <a 
              href="https://github.com/your-username" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resumeLink"
            >
              GitHub <FaExternalLinkAlt size={15} />
            </a>.
          </p>       
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;