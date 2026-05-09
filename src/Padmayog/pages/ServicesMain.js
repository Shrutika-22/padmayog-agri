import { Col, Container, Row } from "react-bootstrap";

export const ServicesMain = () => {
  return (
    <div>
      <div className="services-hero">
        <Container>
          <div className="services-overlay-content">
            <h1>Our Comprehensive Services</h1>

            <p>
              End-to-end solutions for agricultural commodities trading,
              processing, and supply chain management. From procurement to final
              delivery, we provide integrated solutions for agricultural
              commodities trading. Our expertise spans sourcing, quality
              processing, value addition, and complete supply chain management.
            </p>
          </div>
        </Container>
      </div>
      <div className="services-card-section">
        <Container>
          <Row className="g-4">
            <Col lg={4}>
              <div className="service-card trading-card">
                <div className="service-icon">📊</div>

                <h3>Trading Operations</h3>

                <p>Comprehensive trading solutions with market expertise</p>

                <h5>Key Features:</h5>

                <ul>
                  <li>✓ Spot trading of agricultural commodities</li>
                  <li>✓ Futures and forward contracts</li>
                  <li>✓ Contract farming arrangements</li>
                  <li>✓ Price risk management</li>
                  <li>✓ Market intelligence and analysis</li>
                </ul>

                <button>Inquire Now</button>
              </div>
            </Col>

            <Col lg={4}>
              <div className="service-card export-card">
                <div className="service-icon">📤</div>

                <h3>Export Services</h3>

                <p>End-to-end export solutions for global markets</p>

                <h5>Key Features:</h5>

                <ul>
                  <li>✓ Export documentation and compliance</li>
                  <li>✓ International logistics coordination</li>
                  <li>✓ Quality compliance certifications</li>
                  <li>✓ Customs clearance assistance</li>
                  <li>✓ Letter of Credit facilitation</li>
                </ul>

                <button>Inquire Now</button>
              </div>
            </Col>

            <Col lg={4}>
              <div className="service-card manufacturing-card">
                <div className="service-icon">🏭</div>

                <h3>Manufacturing</h3>

                <p>Processing excellence with quality control</p>

                <h5>Key Features:</h5>

                <ul>
                  <li>✓ Processing and milling facilities</li>
                  <li>✓ Value-added product manufacturing</li>
                  <li>✓ Quality control laboratories</li>
                  <li>✓ Packaging and labeling</li>
                  <li>✓ Research and development</li>
                </ul>

                <button>Inquire Now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="service-process-section">
        <Container>
          <div className="section-title">
            <h2>Our Service Process</h2>
          </div>

          <Row className="g-4">
            {[
              ["1", "Requirement Analysis", "Understanding client needs"],
              [
                "2",
                "Sourcing/Supplier Identification",
                "Finding quality suppliers",
              ],
              ["3", "Quality Verification", "Testing and certification"],
              ["4", "Contract Finalization", "Terms and conditions agreement"],
              ["6", "Delivery & Support", "Final delivery and after-sales"],
            ].map((item, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="process-card">
                  <div className="process-heading">
                    <span>{item[0]}</span>
                    <h3>{item[1]}</h3>
                  </div>
                  <p>{item[2]}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="case-study-section">
        <Container>
          <div className="section-title">
            <h2>Case Studies & Success Stories</h2>
          </div>

          <Row className="g-4">
            <Col lg={4}>
              <div className="case-card">
                <div className="case-top">
                  <div className="case-logo">GFC</div>

                  <div>
                    <h3>Global Food Corp</h3>
                    <h5>Wheat Export to Middle East</h5>
                  </div>
                </div>

                <div className="case-badge">Increased efficiency by 40%</div>

                <p>
                  Managed complete export process including documentation,
                  logistics, and compliance
                </p>

                <a href="/">Read Full Case Study →</a>
              </div>
            </Col>

            <Col lg={4}>
              <div className="case-card">
                <div className="case-top">
                  <div className="case-logo">ASL</div>

                  <div>
                    <h3>Asian Spices Ltd</h3>
                    <h5>Spice Import from India</h5>
                  </div>
                </div>

                <div className="case-badge">Saved 30% in costs</div>

                <p>
                  Optimized supply chain and reduced transit time by 15 days
                </p>

                <a href="/">Read Full Case Study →</a>
              </div>
            </Col>

            <Col lg={4}>
              <div className="case-card">
                <div className="case-top">
                  <div className="case-logo">EGT</div>

                  <div>
                    <h3>European Grain Traders</h3>
                    <h5>Corn Futures Trading</h5>
                  </div>
                </div>

                <div className="case-badge">20% better pricing</div>

                <p>
                  Implemented price risk management strategies for optimal
                  pricing
                </p>

                <a href="/">Read Full Case Study →</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="why-choose-section">
        <Container>
          <div className="section-title">
            <h2>Why Choose Padmayog Agrotech?</h2>
          </div>

          <Row className="g-4 text-center">
            <Col lg={3} md={6}>
              <div className="why-card">
                <div className="why-icon">🌍</div>
                <h3>Global Network</h3>
                <p>Connections in 10+ countries worldwide</p>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="why-card">
                <div className="why-icon">⭐</div>
                <h3>Quality Guarantee</h3>
                <p>ISO certified quality control processes</p>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="why-card">
                <div className="why-icon">⚡</div>
                <h3>Fast Execution</h3>
                <p>Efficient logistics and timely delivery</p>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="why-card">
                <div className="why-icon">🤝</div>
                <h3>Transparent Pricing</h3>
                <p>Competitive rates with no hidden costs</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="partner-cta-section">
        <Container>
          <div className="partner-cta-box">
            <h2>Ready to Partner with Us?</h2>

            <p>
              Contact our team today to discuss your agricultural commodity
              requirements
            </p>

            <div className="partner-btns">
              <button className="get-btn">Get In Touch</button>
              <button className="call-btn">Call Now</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
