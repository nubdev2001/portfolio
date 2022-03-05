import React from 'react'
import '../../css/Header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { Animated } from 'react-animated-css'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <Animated animationIn="bounceInDown" isVisible={true}>
                <Navbar bg="navnar-theme" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/" style={{ marginRight: '120px' }}><FontAwesomeIcon icon={faHome} /> หน้าแรก</Nav.Link>
                                <Nav.Link as={Link} to="/workings" ><FontAwesomeIcon icon={faList} /> ผลงาน</Nav.Link>
                            </Nav>
                            <Nav className="mx-auto">
                                <Navbar.Brand>NUBDev</Navbar.Brand>
                            </Nav>
                            <Nav className="ml-auto">
                                <Nav.Link as={Link} to="/contact" style={{ marginRight: '120px' }}><FontAwesomeIcon icon={faPhone} /> ติดต่อ</Nav.Link>
                                <Nav.Link as={Link} to="/profile"><FontAwesomeIcon icon={faUser} /> โปรไฟล์</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Animated>
        </>
    )
}

export default Header