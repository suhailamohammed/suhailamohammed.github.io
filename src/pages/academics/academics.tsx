import React from "react";
import stanfordLogo from "../../assets/stanford.avif";
import RSCMicroplasticImg from "../../assets/rsc-mp.jpg";
import FaceMaskImg from "../../assets/face-mask.jpg";
import { FaGithub, FaExternalLinkAlt, FaUniversity, FaAward, FaGraduationCap } from 'react-icons/fa';
import { FaFilePdf, FaFilePowerpoint } from "react-icons/fa";
import './style.css';

class Academics extends React.Component{
  researchWorks = [
    {
      title: 'Deep-learning enabled rapid and low-cost detection of microplastics',
      venue: 'RSC Advances',
      year: '2025',
      authors: "Md. Zayed Bin Zahir Arju, Nafisa Amin Hridi, Lamiya Dewan, Suhaila Mohammed*, Md. Nurul Amin, Taslim Ur Rashid, Abul Kalam Azad, Sejuti Rahman, Mainul Hossain and Ahsan Habib",
      link: 'https://pubs.rsc.org/en/content/articlelanding/2025/ra/d4ra07991d',
      github: null,
      arxiv: null,
      slide: null,
      pdf: "https://pubs.rsc.org/en/content/articlepdf/2025/ra/d4ra07991d",
      image: RSCMicroplasticImg,
    },
    {
      title: 'Face Mask Detection Using Artificial Intelligence to Operate Automatic Door',
      venue: 'Springer Singapore',
      year: '2022',
      authors: "Suhaila Mohammed*, Fahim Ahmed, Mohammad Azwad Saadat Sarwar, Rubayed Mehedi, Kaushik Sarker and Mahady Hasan",
      link: "https://doi.org/10.1007/978-981-19-6004-8_29",
      github: null,
      arxiv: null,
      slide: "https://docs.google.com/presentation/d/1RZwGoJUo5_FTQ-ninW_P-JVvJQwQBq7a/edit?usp=sharing&ouid=114901786055181099173&rtpof=true&sd=true",
      pdf: null,
      image: FaceMaskImg,
    },
  ];

  certifications = [
    {
      title: "CS336: Language Modeling from Scratch",
      issuer: "Stanford University",
      logo: stanfordLogo,
      date: "Ongoing (YouTube)",
      link: "https://stanford-cs336.github.io/spring2025/",
      displayCred: false
    },
    {
      title: "CS229: Machine Learning",
      issuer: "Stanford University",
      logo: stanfordLogo,
      date: "2022 (Youtube)",
      link: "https://cs229.stanford.edu/",
      displayCred: false
    },
    {
      title: "Programming Fundamentals",
      issuer: "Coursera",
      date: "Jun 2020",
      id: "EXXY8XKC5XDQ",
      logo: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon-152x152.png",
      link: "https://coursera.org/share/d94eb7c216e093f35929ea467292d6b9",
      displayCred: true
    },
    {
      title: "AI For Everyone",
      issuer: "Coursera",
      date: "Jun 2020",
      id: "G3E9VHDNCJJB",
      link: "https://coursera.org/share/80a4d66ddfa3fade368aca27f162a747",
      logo: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon-152x152.png",
      displayCred: true
    },
    {
      title: "Operating Systems and You: Becoming a Power User",
      issuer: "Coursera",
      date: "Jun 2020",
      id: "8R4JPEZT86MD",
      link: "https://coursera.org/share/8990c52173d93ec287e5efab03116aaa",
      logo: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon-152x152.png",
      displayCred: true
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "Coursera",
      date: "Jun 2020",
      id: "QVJ5NULJFKQ4",
      link: "https://coursera.org/share/172246cf483f2060c6d4df92a06860ba",
      logo: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon-152x152.png",
      displayCred: true
    },
    {
      title: "Technical Support Fundamentals",
      issuer: "Coursera",
      date: "May 2020",
      id: "BHVR8FEXPC9V",
      link: "https://coursera.org/share/739aebb9bc26936698bf17ccaa7ebe66",
      logo: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon-152x152.png",
      displayCred: true
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      date: "May 2020",
      id: "D5XGQ4HK7P23",
      link: "https://coursera.org/share/c4259dbc1d266c563a664231b4b29b73",
      logo: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon-152x152.png",
      displayCred: true
    }
  ];


  render() {
    return (
      <div className="research-page">
        <div className="intro">
          <h2 className="section-title">Education</h2>
            <div className="education-card">
              <div className="education-header">
                <div className="degree-highlight">
                  <div className="degree-main">
                    <h4>B.Sc. in Computer Science & Engineering</h4>
                    <div className="badgeContainer">
                      <div className="gpa-badge">
                        <span>CGPA: <strong>3.79 / 4.00</strong></span>
                      </div>
                      <div className="gpa-badge">
                        <span><FaGraduationCap className="grad-icon" /> Cum Laude</span>
                      </div>
                    </div>
                  </div>
                  <div className="university-info">
                    <div className="uni-badge">
                      <FaUniversity className="uni-icon" />
                      <div>
                        <span className="uni-name">Independent University, Bangladesh</span>
                        <span className="year">2019 - 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="achievements">
                <h4><FaAward className="award-icon" /> Highlights</h4>
                <ul>
                  <li>Recipient of departmental full tuition scholarship for academic excellence.</li>
                  <li>Recipient of Vice Chancellor List, Dean's Merit and Dean's List.</li>
                </ul>
              </div>
            </div>
          </div>
        <div>
          <h3 className="section-title">Publications</h3>
          <div className="card-grid">
            {this.researchWorks.map((work, idx) => (
              <div key={idx} className="research-card">
                <div className="image-container">
                  <img src={work.image} alt={work.title} />
                </div>
                <div className="card-details">
                  <h4>{work.title}</h4>
                  <p className="author">{work.authors}</p>
                  <p className="venue">{work.venue} • {work.year}</p>
                  <div className="links">
                    {work.link && (
                      <a href={work.link} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> DOI
                      </a>
                    )}
                    {work.slide && (
                      <a href={work.slide} target="_blank" rel="noopener noreferrer">
                        <FaFilePowerpoint /> Slide
                      </a>
                    )}
                    {work.pdf && (
                      <a href={work.pdf} target="_blank" rel="noopener noreferrer">
                        <FaFilePdf /> PDF
                      </a>
                    )}
                    {work.arxiv && (
                      <a href={work.arxiv} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> arXiv
                      </a>
                    )}
                    {work.github && (
                      <a href={work.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="certifications">
          <h2 className="section-title">Online Courses</h2>
          <div className="cert-grid">
            {this.certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="cert-logo"
                />
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer} | {cert.date}</p>
                  {cert.displayCred && <a href={cert.link} className="cert-link" target="_blank" rel="noreferrer">
                    Show credential
                  </a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Academics;