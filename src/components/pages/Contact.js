import { Animated } from "react-animated-css"
import { Container } from "react-bootstrap"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Page - NUBDev</title>
            </Helmet>
            <Animated animationIn="fadeIn" animationInDuration={2500} isVisible={true}>
                <Container className="mt-5 text-center">
                    <div className="text-white">
                        <h3 className="mb-5">ติดต่อ</h3>
                        <h2>FB : <a target="_blank" href="https://www.facebook.com/nubs.yuthana.2001/">Yuthana Wareesri</a></h2>
                    </div>
                </Container>
            </Animated>
        </>
    )
}

export default Contact