import { Button, Container } from "react-bootstrap";

export const QuoteSection = () => {
  return (
    <div className="quote-section">
      <Container className="text-center">

        <h2 className="quote-title fw-bold">
          Need a Quote?
        </h2>

        <p className="quote-text mx-auto">
          Get competitive pricing for your commodity requirements.
          Click below to open the quote form.
        </p>

        <Button className="quote-btn">
          Open Quote Form
        </Button>

        <div className="quote-features-row">

          <div className="quote-feature">
            <div className="quote-icon">⚡</div>
            <h4 className="feature-title">Fast Response</h4>
            <p>Get quotes within 24 hours</p>
          </div>

          <div className="quote-feature">
            <div className="quote-icon">💰</div>
            <h4 className="feature-title">Competitive Pricing</h4>
            <p>Best market rates guaranteed</p>
          </div>

          <div className="quote-feature">
            <div className="quote-icon">✅</div>
            <h4 className="feature-title">Quality Assured</h4>
            <p>Certified quality with documentation</p>
          </div>

        </div>

      </Container>
    </div>
  );
};