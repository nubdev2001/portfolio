import { Animated } from "react-animated-css"
import { Col, Row } from "react-bootstrap"
import { Helmet } from "react-helmet"
import Work1 from '../images/works_1.png'

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Workings Page - NUBDev</title>
            </Helmet>
            <Animated animationIn="fadeIn" animationInDuration={1000} isVisible={true}>
                <Row className="justify-content-center">
                    <Col lg={6} className="text-center mt-5">
                        <img src={Work1} style={{ width: "35%" }} alt="work_1" />
                        <h5 className="mt-3 text-muted">รางวัลนี้ได้มาตอนปวช 3 หรือ ม.6 นั้นเอง เป็นครั้งแรกที่ได้เข้าแข่งทำเว็บ Ecommerce และได้ที่ 1 มาด้วย 95.5/100 คะแนน</h5>
                    </Col>
                </Row>
                <Row className="mt-5 text-center text-muted">
                <Col md={6} className="mb-5">
                        <h5>ตอนปวช 2 หรือ ม.5 เคยเปิดเว็บแนวดูการ์ตูน/หนัง</h5>
                    </Col>
                    <Col md={6} className="mb-5">
                        <h5>ตอนปวช 3 หรือ ม.6 เคยทำเว็บ Social เพื่อเป็นโปรเจคจบ</h5>
                    </Col>
                    <Col md={6} className="mb-5">
                        <h5>ตอนปวส 1 เคยเปิดเว็บแนวดูหนังผู้ใหญ่!!!</h5>
                    </Col>
                    <Col md={12} className="mb-5">
                        <h5>นี้เป็นแค่ผลงานที่เคยใช้งานมาจริงๆ</h5>
                    </Col>
                </Row>
            </Animated>
        </>
    )
}

export default Contact