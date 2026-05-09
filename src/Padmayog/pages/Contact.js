import { Col, Container, Row, Form, Button, FormGroup, FormLabel, FormControl, FormSelect } from "react-bootstrap";

export const Contact = () => {
  return (
    <div className="contact-page">
      <Container>

        <div className="contact-title">
          <h1>Contact Us</h1>
          <p>
            Get in touch with our team for any inquiries about our commodities,
            services, trade partnerships, vendor registrations, or any other
            business opportunities.
          </p>
        </div>

        <Row className="g-5 align-items-stretch">
          <Col lg={6}>
            <div className="contact-form-box">
              <h2>Get in Touch</h2>
              <p>Fill out the form below and our team will contact you shortly</p>

              <div className="server-status">
                ● ✓ Connected to server
              </div>

              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup className="mb-3">
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl placeholder="John Doe" />
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup className="mb-3">
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl placeholder="john@example.com" />
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup className="mb-3">
                      <FormLabel>Contact Number *</FormLabel>
                      <FormControl placeholder="+91 98765 43210" />
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup className="mb-3">
                      <FormLabel>Company Name</FormLabel>
                      <FormControl placeholder="Your Company Pvt. Ltd." />
                    </FormGroup>
                  </Col>

                  <Col md={12}>
                    <FormGroup className="mb-3">
                      <FormLabel>Service Inquiry *</FormLabel>
                      <FormSelect>
                        <option>General Inquiry</option>
                        <option>Commodity Inquiry</option>
                        <option>Export Services</option>
                        <option>Vendor Registration</option>
                      </FormSelect>
                    </FormGroup>
                  </Col>

                  <Col md={12}>
                    <FormGroup className="mb-4">
                      <FormLabel>Your Message *</FormLabel>
                      <FormControl
                        as="textarea"
                        rows={6}
                        placeholder="Please describe your requirements in detail..."
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Button className="contact-send-btn">
                  Send Message
                </Button>
              </Form>

              <p className="privacy-note">
                * Required fields. We respect your privacy and will not share your information.
              </p>

              <div className="direct-contact">
                <p>Prefer to contact us directly?</p>

                <div>
                  <span>📞 +91 788 766 2700</span>
                  <span>✉️ info@padmayog.com</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="office-box">
              <h2>Our Offices</h2>

              <div className="office-card">
                <div className="office-icon">H</div>

                <div>
                  <h3>Headquarters</h3>
                  <p>Mon-Fri: 9AM-6PM</p>

                  <p>📍 109, Suratwala Mark Plazoo, Hinjewadi, Pune, MS-411057</p>
                  <p>📞 +91 788 766 2700</p>
                  <p>✉️ info@padmayog.in</p>
                </div>
              </div>
            </div>

            <div className="department-box">
              <h2>Department Contacts</h2>

              <Row>
                <Col md={6}>
                  <div className="dept-card">
                    <h4>Sales</h4>
                    <p>info@padmayog.in</p>
                    <p>+91 788 766 2700</p>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="dept-card">
                    <h4>Support</h4>
                    <p>info@padmayog.in</p>
                    <p>+91 788 766 2700</p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="faq-box">
              <h2>Frequently Asked Questions</h2>

              <div className="faq-item">
                <h4>What is your response time?</h4>
                <p>
                  We typically respond within 24 hours during business days.
                  For urgent matters, please call us directly.
                </p>
              </div>

              <div className="faq-item">
                <h4>Do you work on weekends?</h4>
                <p>
                  Our offices are closed on weekends, but our team monitors
                  urgent emails and will respond on Monday.
                </p>
              </div>

              <div className="faq-item">
                <h4>What information should I include in my inquiry?</h4>
                <p>
                  Please include: commodity type, quantity requirements, quality
                  specifications, delivery timeline, and any special requirements.
                </p>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
};