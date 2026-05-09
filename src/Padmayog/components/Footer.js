import { Col, Container, Row } from "react-bootstrap";
import PadmayogLogo from "../assets/PadmayogLogo.png";
export const Footer = () => {
  return (
    <footer className="footer-section">

      <Container>

        <Row>

          <Col lg={3}>
            <img
              src={PadmayogLogo}
              alt="logo"
              className="footer-logo"
            />

            <p className="footer-text">
              Global leader in agri-commodities trading, processing,
              and supply chain solutions.
            </p>

            <p className="copyright">
              © 2026 Padmayog Aggrotech. All rights reserved.
            </p>
          </Col>

          <Col lg={3}>
            <h5>Quick Links</h5>

            <ul className="footer-links">
              <li>Home</li>
              <li>About Us</li>
              <li>Commodities</li>
              <li>Services</li>
              <li>Trade Process</li>
              <li>Global Reach</li>
              <li>Contact</li>
              <li>Generate Packing List</li>
              <li>Admin Panel</li>
            </ul>
          </Col>

          <Col lg={3}>
            <h5>Legal</h5>

            <ul className="footer-links">
              <li>Terms of Trade</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Quality Guarantee</li>
            </ul>
          </Col>

          <Col lg={3}>
            <h5>Contact Us</h5>

            <ul className="footer-links">
              <li>📍 109, Suratwala Mark Plazoo, Hinjewadi, Pune</li>
              <li>📞 +91 788 766 2700</li>
              <li>✉️ info@padmayog.in</li>
            </ul>

            <h5 className="follow-title">Follow Us</h5>

            <div className="social-icons">
              <span>f</span>
              <span>T</span>
              <span>I</span>
              <span>in</span>
            </div>
          </Col>

        </Row>

      </Container>

    </footer>
  );
};