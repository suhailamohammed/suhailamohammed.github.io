import React from "react";
import './style.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaResearchgate } from 'react-icons/fa';
import { SiOrcid, SiGooglescholar } from "react-icons/si";
import openReviewMask from "../../assets/openreview_mask.png";

const socialLinks = [
    { label: "Email", href: "mailto:msuhaila47@gmail.com", icon: <FaEnvelope /> },
    { label: "GitHub", href: "https://github.com/suhailamohammed", icon: <FaGithub /> },
    { label: "LinkedIn", href: "https://linkedin.com/in/suhailamohammed", icon: <FaLinkedin /> },
    { label: "ResearchGate", href: "https://www.researchgate.net/profile/Suhaila-Mohammed-3", icon: <FaResearchgate /> },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=b_ZomggAAAAJ&hl=en", icon: <SiGooglescholar /> },
    { label: "ORCID", href: "https://orcid.org/0000-0003-2439-3390", icon: <SiOrcid /> },
    { label: "OpenReview", href: "https://openreview.net/profile?id=%7ESuhaila_Mohammed1", icon: <span className="openReviewIcon" style={{ maskImage: `url(${openReviewMask})`, WebkitMaskImage: `url(${openReviewMask})` }} /> },
];

const researchInterests = ["Machine Learning", "Natural Language Processing", "Healthcare", "Conversational AI"];

class Home extends React.Component {
    render() {
        return (
            <div className="homeContainer">
                <section className="hero">
                    <h2 className="heroName">Suhaila Mohammed</h2>
                    <div className="socialLinks">
                        {socialLinks.map(({ label, href, icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="socialLink"
                                aria-label={label}
                                title={label}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </section>

                <section className="card aboutContent">
                    <h3 className="sectionTitle">About</h3>
                    <p>
                        I am Suhaila, currently a <strong>Product Lead and Software Engineer</strong> at
                        <a href="https://myseva.ai/" target="_blank" rel="noopener noreferrer"> Seva Intelligence, Inc.</a>
                        I hold a bachelor’s degree in Computer Science and Engineering from
                        <a href="https://iub.ac.bd/" target="_blank" rel="noopener noreferrer"> Independent University, Bangladesh</a>.
                        I have previously worked as a Software Engineer at
                        <a href="https://chaldal.tech/" target="_blank" rel="noopener noreferrer"> Chaldal Ltd (YC-S15) </a>
                        and, during my final year, as an Undergraduate Research Assistant, where I focused on finding bio-markers using biomedical signals for stroke prediction.
                    </p>
                    <p>
                        My research focuses on applying machine learning to critical societal issues. This includes developing new approaches in healthcare, alongside applications in environmental science and the broader social sciences. I am particularly interested in problems
                        like <strong>(1)</strong> making healthcare systems better by creating bias-free and context-aware tools to support decision-making, <strong>(2)</strong> leveraging multimodal learning to developing novel methods, and <strong>(3)</strong> developing intelligent and interpretable AI solutions.
                    </p>
                    <p>
                        In addition, I have a growing interest in computational biology and bioinformatics, particularly in challenges such as polypharmacy, drug interactions, and precision medicine applications.
                    </p>
                    <p>
                        Beyond this, I am a reader who loves to delve into stories which sometimes inspires me to write my own. I also have a passion for travelling.
                    </p>
                </section>

                <section className="card">
                    <h3 className="sectionTitle">Research Interests</h3>
                    <div className="tags">
                        {researchInterests.map((interest) => (
                            <span key={interest} className="tag">{interest}</span>
                        ))}
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
