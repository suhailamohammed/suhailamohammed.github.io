import React from "react";
import './style.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaResearchgate } from 'react-icons/fa';
import { SiOrcid, SiGooglescholar } from "react-icons/si";

class Home extends React.Component{
    render() {
        return (
            <div className="homeContainer">
                <div className="aboutMe">
                    <div>
                        <h2>Suhaila Mohammed</h2>
                        <div className="aboutMeIconContainer">
                            <a 
                                href="mailto:msuhaila47@gmail.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaEnvelope className="icon envelope" />
                            </a>

                            <a 
                                href="https://github.com/suhailamohammed" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="icon github" />
                            </a>

                            <a 
                                href="https://linkedin.com/in/suhailamohammed" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="icon linkedin" />
                            </a>

                            <a 
                                href="https://www.researchgate.net/profile/Suhaila-Mohammed-3" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaResearchgate className="icon researchgate" />
                            </a>

                            <a 
                                href="https://scholar.google.com/citations?user=b_ZomggAAAAJ&hl=en" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <SiGooglescholar className="icon googlescholar" />
                            </a>

                            <a 
                                href="https://orcid.org/0000-0003-2439-3390" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <SiOrcid className="icon orcid" />
                            </a>
                        </div>
                    </div>
                    <div className="aboutContent">
                       <p>
                            I am Suhaila, a software engineer with a bachelor’s degree in Computer Science and Engineering from 
                            <a href="https://iub.ac.bd/" target="_blank" rel="noopener noreferrer"> Independent University, Bangladesh</a>. 
                            I have previously worked as a Software Engineer at 
                            <a href="https://chaldal.tech/" target="_blank" rel="noopener noreferrer"> Chaldal Ltd (Y-25) </a> 
                            and, during my final year, as an Undergraduate Research Assistant, where I focused on finding bio-markers using biomedical signals for stroke prediction.
                        </p>
                        <p>
                           My research focuses on applying machine learning to critical societal issues. This includes developing new approaches in healthcare, alongside applications in environmental science and the broader social sciences. I am particularly interested in problems
                           like <strong>(1)</strong> making healthcare systems better by creating bias-free and context-aware tools to support decision-making, <strong>(2)</strong> leveraging multimodal learning to developing novel methods, and <strong>(3)</strong> developing intelligent and interpretable AI solutions.
                        </p>
                        <p>
                            In addition, I have a growing interest in computational biology and bioinformatics, particularly in challenges such as polypharmacy, drug interactions, and precision medicine applications.
                        </p>
                        <div className="researchInterestContent">
                            <span className="label">Research Interests:</span>
                            <div className="tags">
                                <span className="tag">Machine Learning</span>
                                <span className="tag">Deep Learning</span>
                                <span className="tag">LLMs</span>
                                <span className="tag">Healthcare</span>
                                <span className="tag">CompBio</span>
                            </div>
                        </div>
                        <p>
                            Beyond this, I am a reader who loves to delve into stories which sometimes inspires me to write my own. I also have a passion for travelling.
                        </p>
                    </div>
                    
                    
                    <div className="newsSection">
                    <h3 className="newsHeading">🗞️ Latest News</h3>
                    <div className="newsItems">
                        {/* <div className="newsItem">
                            <span className="newsDate">Aug 2025</span>
                            <p className="newsText">
                                My website is now live!
                            </p>
                        </div> */}
                        <div className="newsItem">
                            <span className="newsDate">April 2025</span>
                            <p className="newsText">
                                Published my second research paper on deep learning for rapid microplastic detection in <strong><em>RSC Advances</em></strong>.{' 🎉 '} 
                                <a
                                    href="https://pubs.rsc.org/en/content/articlelanding/2025/ra/d4ra07991d"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="newsLink"
                                >
                                Read the full paper here
                                </a>
                                .
                            </p>
                        </div>
                        <div className="newsItem">
                            <span className="newsDate">May 2025</span>
                            <p className="newsText">
                                Launched my personal dua jar website.{' '}
                                <a
                                href="https://dua-jar.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="newsLink"
                                >
                                Do check it out!
                                </a>
                            </p>
                        </div>
                        <div className="newsItem">
                            <span className="newsDate">Feb 2025</span>
                            <p className="newsText">Got promoted to <strong>Software Engineer L3</strong> @ Chaldal Ltd! 🎉</p>
                        </div>
                        <div className="newsItem">
                            <span className="newsDate">Nov 2024</span>
                            <p className="newsText">Submitted microplastic detection paper to RSC Advances journal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Home;