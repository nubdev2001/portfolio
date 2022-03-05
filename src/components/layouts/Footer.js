import React from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <Animated animationIn="fadeIn" animationInDuration={2500} isVisible={true}>
                <div className="footer">
                    Develop by NUBDev with React JS @copyright 2021 <Link to="/contact">ติดต่อ</Link>
                </div>
            </Animated>
        </>
    )
}

export default Footer