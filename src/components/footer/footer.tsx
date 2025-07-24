import React from "react";
import './style.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footerContainer">
                <div className="footerContent">
                    <p>&copy; {new Date().getFullYear()} Suhaila Mohammed</p>
                    <p>
                        <a href="mailto:suhailamohammed@example.com">suhailamohammed@example.com</a> | 
                        <a href="https://github.com/suhailamohammed" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
                        <a href="https://www.linkedin.com/in/suhailamohammed" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;
