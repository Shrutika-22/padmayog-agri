import { Col, Container, Row } from "react-bootstrap"

export const TrustedBrands = () => {
    return (
        <div className="trusted-section">
            <Container>
                <div className="section-title">
                    <h2>Brands that Trust Us</h2>
                    <p>Trusted by leading agricultural companies worldwide.</p>
                </div>
                <Row className="g-4 justify-content-center">
                    <Col lg={2} md={4} sm={6} className="mb-4">
                    <div className="brand-card">
                        <div className="brand-logo-box"></div>
                        <p>Global Grain Corp</p>
                    </div>
                    </Col>
                    <Col lg={2} md={4} sm={6} className="mb-4">
                    <div className="brand-card">
                        <div className="brand-logo-box"></div>
                        <p>AgriTrade International</p>
                    </div>
                    </Col>
                    <Col lg={2} md={4} sm={6} className="mb-4">
                    <div className="brand-card">
                        <div className="brand-logo-box"></div>
                        <p>FarmFresh Exports</p>
                    </div>
                    </Col>
                    <Col lg={2} md={4} sm={6} className="mb-4">
                    <div className="brand-card">
                        <div className="brand-logo-box"></div>
                        <p>GreenField Trading</p>
                    </div>
                    </Col>
                    <Col lg={2} md={4} sm={6} className="mb-4">
                    <div className="brand-card">
                        <div className="brand-logo-box"></div>
                        <p>Harvest Partners</p>
                    </div>
                    </Col>
                    <Col lg={2} md={4} sm={6} className="mb-4">
                    <div className="brand-card">
                        <div className="brand-logo-box"></div>
                        <p>CropMasters Inc</p>
                    </div>
                    </Col>
                </Row>
                </Container>
        </div>
    );
}