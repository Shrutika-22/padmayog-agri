import { Card, CardBody, Col, Container, Row } from "react-bootstrap"

export const About = () => {
    return (
        <>
       <div className="about-hero">
        <Container>
            <div className="about-overlay-content">
                <h1>About Padmayog Agrotech Pvt Ltd</h1>
                 <p>From India's fertile farmlands to global marketplaces, we bridge agricultural excellence with international trade integrity. 
                Our journey is built on deep-rooted procurement networks, advanced processing capabilities, and export expertise. 
                We transform agricultural potential into commercially viable, quality-assured commodities for worldwide consumption.</p>
            </div>
        </Container>
        </div>
        <div className="journey-section">
            <Container>
                <Row className="g-5 align-items-start">
                    <Col lg={6}>
                        <div className="journey-left">
                            <h2>Our Journey</h2>
                            <p>
                                Padmayog Agrotech Private Limited is an India-based agri-commodities and global trade company, purpose-built to deliver reliable agricultural supply solutions to international markets.
                            </p>
                            <p>
                                We operate at the intersection of sourcing strength, processing capability, and export excellence—transforming agricultural potential into globally traded value.
                            </p>
                            <p>
                                Backed by deep-rooted procurement networks and a sharp understanding of international trade dynamics, every shipment we deliver reflects quality, compliance, and commercial integrity.
                            </p>
                        </div>
                        </Col>
                    <Col lg={6}>
                        <div className="journey-right">
                            <h2>What Sets Us Apart</h2>
                            <ul>
                                <li>
                                    🌱<strong>Strong Origin Network: </strong>
                                    Direct engagement with farmers, aggregators, and processors across key agricultural belts.
                                </li>
                                <li>
                                
                                    🌍<strong>Global Trade Expertise: </strong>
                                    Operations aligned with Incoterms®, SGS inspections, and ICC-compliant payment mechanisms.
                                </li>
                                <li>
                                    📦<strong>Quality & Compliance First: </strong>
                                    Stringent QC, accurate documentation, and third-party inspections for every shipment.
                                </li>
                                <li>
                                    🤝<strong>Transparent & Secure Transactions:</strong>
                                    Clear contracts, protected payments, and execution-focused delivery commitments.
                                </li>
                                </ul>
                        </div>
                    </Col>
                    </Row>
            </Container>
        </div>
       <div className="mission-section">
        <Container>
            <Row className="g-4"> 
               
                <Col lg={6}>
                 <Card>
                    <CardBody>
                    <div className="mission-card">
                        <div className="mission-icon">🎯</div>
                        <h2>Our Mission</h2>
                        <p>
                            To deliver dependable, compliant, and high-quality agricultural commodities to global markets through strong sourcing, disciplined execution, and ethical trade practices.
                        </p>
                    </div>
                    </CardBody>
                    </Card>
                </Col>
                
                <Col lg={6}>
                 <Card>
                    <CardBody>
                    <div className="mission-card">
                        <div className="mission-icon">🔭</div>
                        <h2>Our Vision</h2>
                        <p>
                            To become a globally trusted agri-trade partner by transforming agricultural supply chains into transparent, efficient, and value-driven ecosystems.
                        </p>
                    </div>
                    </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
       </div>


       <div className="values-section">
        <Container>
            <div className="section-title">
                <h2>Our Core Values</h2>
            </div>
            <Row className="g-5">
                <Col lg={4}>
                    <div className="value-card active-card">
                        <div className="value-icon">🤝</div>
                        <h3>Integrity</h3>
                        <p>Transparent, ethical, and compliance-driven trade practices</p>
                    </div>
                </Col>
                 <Col lg={4}>
                    <div className="value-card">
                        <div className="value-icon">🎯</div>
                        <h3>Quality</h3>
                        <p>Strict sourcing, processing, and inspection standards</p>
                    </div>
                </Col>
                 <Col lg={4}>
                    <div className="value-card">
                        <div className="value-icon">🌍</div>
                        <h3>Global Focus</h3>
                        <p>Aligned with international trade norms and buyer expectations</p>
                    </div>
                </Col>
                 <Col lg={4}>
                    <div className="value-card">
                        <div className="value-icon">📦</div>
                        <h3>Reliability</h3>
                        <p>Consistent supply execution with end-to-end accountability</p>
                    </div>
                </Col>
                 <Col lg={4}>
                    <div className="value-card">
                        <div className="value-icon">🌱</div>
                        <h3>Strong Origins</h3>
                        <p>Deep-rooted sourcing from trusted agricultural networks</p>
                    </div>
                </Col>
                 <Col lg={4}>
                    <div className="value-card">
                        <div className="value-icon">🔐</div>
                        <h3>Trust</h3>
                        <p>Secure contracts, protected payments, and long-term partnerships</p>
                    </div>
                </Col>
            </Row>
        </Container>
       </div>

        <div className="leadership-section">
        <Container>
            <div className="section-title">
                <h2>Leadership Team</h2>
            </div>
            <Row>
                <Col lg={5}>
                <div className="leader-card">
                    <div className="leader-avatar">DSMR</div>
                    <h3>Dr. Suyog M. Rasal</h3>
                    <h5>Director, Padmayog Agrotech Private Limited</h5>
                    <p>25+ years in Agri & Global Trade</p>
                </div>
                </Col>
            </Row>
        </Container>
       </div>

       <div className="certification-section">
        <Container>
            <div className="section-title">
                <h2>Certifications & Compliance</h2>
            </div>
            <Row className="g-4">
                <Col lg={4}>
                    <div className="certification-card">
                        <div className="certification-icon">✓ </div>
                        <div>
                            <h3>ISO 22000:2018</h3>
                            <p>Food Safety Management System</p>
                        </div>
                        </div>
                </Col>
                <Col lg={4}>
                    <div className="certification-card">
                        <div className="certification-icon">✓ </div>
                        <div>
                            <h3>FSSAI Certified</h3>
                            <p>Food Safety & Compliance Authority</p>
                        </div>
                        </div>
                </Col>
                <Col lg={4}>
                    <div className="certification-card">
                        <div className="certification-icon">✓ </div>
                        <div>
                            <h3>APEDA Registered</h3>
                            <p>Agricultural & Processed Food Export Council</p>
                        </div>
                        </div>
                </Col>

                </Row>
                
                     </Container>   
       </div>
      </>  
    )
}
