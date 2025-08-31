import React from "react";
import './style.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footerContainer">
                <div className="footerContent">
                    <p>&copy; Copyright {new Date().getFullYear()} Suhaila Mohammed</p>
                </div>
            </div>
        );
    }
}

export default Footer;
