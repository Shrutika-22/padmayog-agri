import {Col, Container, Row } from "react-bootstrap";

export const Commodities = () => {
  return (
    <div className="commodities-section">   
        <Container>
            <div className="section-title">
                <h2>Featured Commodities</h2>
                 
            </div>
            <Row>
                <Col md={2}>
                <div className="commodity-card">
                    <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b" alt="Wheat" />
                   <span>Wheat</span>
                </div>
                </Col>

                <Col md={2}>
                <div className="commodity-card">
                    <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c" alt="Rice" />
                    <span>Rice</span>
                </div>
                </Col>

                <Col md={2}>
                <div className="commodity-card">
                    <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999" alt="Vegetables" />
                        <span>Vegetables</span>
                </div>
                </Col>
                <Col md={2}>
                <div className="commodity-card">
                    <img src="https://images.unsplash.com/photo-1639843606783-b2f9c50a7468?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c295YmVhbnxlbnwwfHwwfHx8MA%3D%3D" alt="Soybean" />
                    <span>Soybean</span>
                </div>
                </Col>
                <Col md={2}>
                <div className="commodity-card">
                    <img src="https://media.istockphoto.com/id/154903927/photo/barley.webp?a=1&b=1&s=612x612&w=0&k=20&c=2c-7-xHB5QBMWAIvoJX5uCy_1ZqwMUa1PoUH7omtsPw=" alt="Barley" />
                    <span>Barley</span>
                </div>
                </Col>
                <Col md={2}>
                <div className="commodity-card">
                    <img src="https://images.unsplash.com/photo-1551754655-cd27e38d2076" alt="Corn" />
                    <span>Corn</span>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
};
