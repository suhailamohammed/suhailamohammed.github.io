import React from "react";
import { FaCalendarAlt, FaDownload } from "react-icons/fa";
import ChaldalLogo from "../../assets/chaldal_com_logo.jpeg";
import IubLogo from "../../assets/independent_university_bangladesh_logo.jpeg";
import "./styles.css";
import ResumePDF from "../../assets/files/Suhaila_Mohammed_CV.pdf";


class Experience extends React.Component {
  timelineData = [
    {
      place: "Chaldal Ltd",
      link: "https://chaldal.tech/",
      logo: ChaldalLogo,
      subroles: [
        {
          date: "Feb 2025 - Mar 2025",
          title: "Software Engineer L3",
          description: [
            "Spearheaded the development of an inventory investment platform using ReactJs and Node.js, enabling internal stakeholders to monitor and allocate funding more efficiently.",
            "Led a data-driven churn analysis initiative using Python and SQL to identify at-risk customers; designed and executed targeted reactivation campaigns that successfully resurrected 40% of dormant users within a 2-week period.",
            "Created Snowflake charts and built interactive Superset dashboards to monitor customer resurrection metrics, enabling real-time analysis of churn risk and campaign impact."
          ]
        },
        {
          date: "Mar 2024 - Jan 2025",
          title: "Software Engineer L2",
          description: [
            "Engineered a GSM/UCS-2 SMS billing validator in C#, eliminating revenue-leaking mischarges and saving the company ~$500–$1000 per campaign, while ensuring full compliance with telecom encoding standards.",
            "Spearheaded the end-to-end development and launch of the Biniyog funding page, architecting a solution that processed over $300,000 in user contributions seamlessly across multiple funding rounds.",
            "Mentored and onboarded new teams engineers on technical and project best practices.",
          ]
        },
        {
          date: "Aug 2023 - Feb 2024",
          title: "Software Engineer L1",
          description: [
            "Led the refactor of the address flow UX on the web platform, reducing user navigation time by 60% and dramatically decreasing incorrect addresses saved. Achieved by implementing simplified forms and optimizing the geo-lookup API integration, which directly reduced failed deliveries and improved order accuracy.",
            "Participating in 24/7 on-call rotations, consistently maintaining a < 2-hour Mean Time to Resolution (MTTR) for over 15 critical production incidents.",
          ]
        },
        {
          date: "Feb 2023 - Jul 2023",
          title: "Engineering Intern",
          description: [
            "Secured a highly competitive internship, being one of four selected from a pool of 50+ students.",
            "Developed a new landing UI that increased purchase conversion by 25%.",
            "Implemented Bangla localization that expanded our user base by making the app accessible to 100M+ Bengali speakers worldwide.",
          ]
        }
      ]
    },
    {
      place: "Independent University, Bangladesh",
      link: "https://www.iub.edu.bd/",
      logo: IubLogo,
      subroles: [
        {
          date: "Dec 2022 - Jul 2024",
          title: "Undergraduate Research Assistant",
          description: [
            "Collaborated with Mr. Asif Bin Khaled, Lecturer, Ms. Ajmiri Khan, Lecturer, and Dr. Kafiul Islam, Associate Professor, IUB, on biomedical signal analysis to identify biomarkers for early stroke prediction.",
            "Conducted literature reviews, formulated research questions, and contributed to preparing a systematic research paper.",
          ]
        },
        {
          date: "Jun 2021 - Dec 2022",
          title: "Teaching Assistant",
          description: [
            "Assisted in undergraduate courses including Data Structures, System Analysis, and Introduction to Computer Programming",
            "Graded assignments and provided detailed feedback to improve student understanding.",
            "Held office hours and guided students through coursework and final projects."
          ]
        }
      ]
    }
  ];

  render() {
    return (
      <div className="experienceContainer">
        <h2>Work Experience</h2>
          <p className="topDescription">
            To view more information on my experience, you can download my 
            <a 
              href={ResumePDF} 
              download="Suhaila_Mohammed_resume.pdf" 
              className="resumeLink"
            >
              resume <FaDownload className="linkIcon" />
            </a>.
          </p>
          {this.timelineData.map((item, index) => (
            <div key={index} className="company">
              <h3 className="companyTitle">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="placeLink">
                  {item.logo && (
                    <img 
                      src={item.logo} 
                      alt={`${item.place} logo`} 
                      className="companyLogo" 
                    />
                  )}
                  {item.place}
                </a>
              </h3>
              <div className="subroles">
                {item.subroles.map((role, i) => (
                  <div key={i} className="subrole">
                    <div className="titleDateContainer">
                      <strong className="roleTitle">{role.title}</strong>
                      <div className="timeline-date">
                        <FaCalendarAlt className="date-icon" />
                        <span>{role.date}</span>
                      </div>
                    </div>
                    <ul className="descriptionList">
                      {role.description.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default Experience;