import { Col, Container, Row } from "react-bootstrap";

export const Services = () => {
  return (
    <div className="services-section">
      <Container>
        <div className="section-title">
          <h2>Our Services</h2>
        </div>

        <Row className="g-4">
          <Col md={3}>
            <div className="home-service-box">
              <div className="service-emoji">🌾</div>
              <h5>Trading</h5>
              <p>Global commodity trading solutions</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="home-service-box">
              <div className="service-emoji">📤</div>
              <h5>Exports</h5>
              <p>International export services</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="home-service-box">
              <div className="service-emoji">📥</div>
              <h5>Imports</h5>
              <p>Import sourcing & logistics</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="home-service-box">
              <div className="service-emoji">🏭</div>
              <h5>Manufacturing</h5>
              <p>Processing facilities</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};