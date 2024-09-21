import { Container, Row, Col } from "react-bootstrap";
import { Newsletter } from "./Newsletter";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter/>
          <Col size={12} sm={6}>  <b style={{
              fontSize: '54px',
              color: 'purple',
              textShadow: '2px 2px 0 white, -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white'
            }}>
              RAM
            </b>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/polabathina-ramcharan-teja/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/print-ramcharan"><img src={navIcon2} alt="Icon" /></a>
              <a href="mailto:ramcharanpolabathina@gmail.com"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
