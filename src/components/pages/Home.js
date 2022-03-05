import React from "react";
import { Animated } from "react-animated-css";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home Page - NUBDev</title>
            </Helmet>
            <Animated animationIn="fadeIn" animationInDuration={2500} isVisible={true}>
                <Container className="mt-5">
                    <div class="wrapper">
                        <div class="typing-demo">
                            I am Full Stack Web Developer
                        </div>
                    </div>
                </Container>
            </Animated>
        </>
    )
}

export default Home