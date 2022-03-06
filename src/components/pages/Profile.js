import { Animated } from "react-animated-css"
import { Col, Container, Row } from "react-bootstrap"
import { Helmet } from "react-helmet"
import ProfileImg from "../images/profile.jpg"
import ProgressBar from "@ramonak/react-progress-bar";

const Profile = () => {

    const mykill = [
        {
            lang: "html",
            percent: 85,
        },
        {
            lang: "css",
            percent: 80,
        },
        {
            lang: "javascript & query",
            percent: 80,
        },
        {
            lang: "PHP & PHP OOP",
            percent: 90,
        },
        {
            lang: "React JavaScript FrameWork & Next Js (frontend)",
            percent: 70,
        },
        {
            lang: "Node Js (backend)",
            percent: 70,
        },
        {
            lang: "python & AI",
            percent: 60,
        },
        {
            lang: "Lua",
            percent: 80,
        },
        {
            lang: "Data Analysis Context Diagram, Data Flow, FlowChart",
            percent: 40,
        },
        {
            lang: "C C++ C# VB",
            percent: 50,
        },
        {
            lang: "(Devops) Jenkins, Kubernetes(k8s), Docker, Linux, nginx",
            percent: 80,
        }
    ]

    return (
        <>
            <Helmet>
                <title>Profile Page - NUBDev</title>
            </Helmet>
            <Animated animationIn="fadeIn" animationInDuration={500} isVisible={true}>
                <Container className="mt-5 mb-5">
                    <div className="text-muted">
                        <div className="mt-4 text-center ">
                            <img src={ProfileImg} style={{ width: "15%", borderRadius: "50%" }} alt="profile" />
                            <h3>Yuthana Wareesri</h3>
                            <h5>เกิดวันที่ 20 ตุลาคม พศ 2544 (20 ปี)</h5>
                        </div>
                        <Row className="mt-5">
                            <Col md={12} className="text-center">
                                <h4>ชื่นชอบการเขียนโปรแกรมเมื่อไหร่ ?</h4>
                                <p>
                                    ก่อนอื่นผมจะเล่าประวัติของผมคร่าวๆให้ฟัง ผมได้คอมพิวเตอร์เครื่องแรกตอนอนุบาล 3 
                                    สมัยนั้นยังเป็น Window XP และสิ่งที่ผมทำครั้งแรกนั้นก็คือเล่นเกมใช่ครับผมเอามาเล่นเกมเล่นทั้งวันเล่นแบบไม่กินข้าวกินปลา 
                                    แล้วมาเริ่มการเขียนโปรแกรมได้ไงละ? เมื่อตอน ม.1 ผมได้ลองเปิดเซิฟเกมมายคราฟและสิ่งที่เซิฟอื่นๆเขามีก็คือเว็บเติมเงิน 
                                    ซึ่งผมก็ต้องการเหมือนกันแต่ผมไม่ชอบซื้ออะไรที่สำเร็จรูปมาแล้ว ผมเลยตัดสินใจลองหัดเขียนเว็บไซต์แบบงูปลาใช่เวลาสักพัก 
                                    ผลปรากฏว่าผมทำมั้นได้นี้แหละครับคือจุดเริ่มต้นของผม
                                </p>
                            </Col>
                            <Col md={12} className="text-white">
                                <h3 className="text-center">My Skill</h3>
                                <Row>
                                    {
                                        mykill.map((val, index) => (
                                            <>
                                                {
                                                    index >= (mykill.length / 2) ?
                                                        <Col md={6} className="text-white">
                                                            <div className="mb-3" key={index}>
                                                                <h6>{val["lang"]}</h6>
                                                                <ProgressBar height={15} labelSize={12} completed={val["percent"]} />
                                                            </div>
                                                        </Col>
                                                        : 
                                                        <Col md={6} className="text-white">
                                                            <div className="mb-3" key={index}>
                                                                <h6>{val["lang"]}</h6>
                                                                <ProgressBar height={15} labelSize={12} completed={val["percent"]} />
                                                            </div>
                                                        </Col>
                                                }
                                            </>
                                        ))
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Animated>
        </>
    )
}

export default Profile
