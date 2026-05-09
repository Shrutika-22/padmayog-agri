import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const TradeProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      id: 1,
      icon: "📝",
      title: "Inquiry & Requirement Analysis",
      desc: "We begin by understanding your specific requirements, quality standards, and timeline.",
      duration: "1-2 Days",
      docs: "Requirements Sheet, Specifications Document",
      details: [
        "Initial consultation and requirement gathering",
        "Volume assessment and specifications",
        "Market analysis and feasibility study",
        "Budget estimation and quotation",
        "Timeline planning and scheduling",
      ],
    },

    {
      id: 2,
      icon: "📄",
      title: "Contract Finalization",
      desc: "We finalize commercial terms, payment structure, and compliance documentation.",
      duration: "2-3 Days",
      docs: "Trade Contract, Payment Terms",
      details: [
        "Finalize commercial terms",
        "Confirm payment mechanism",
        "Prepare contractual documents",
        "Review compliance requirements",
        "Approve shipment timeline",
      ],
    },

    {
      id: 3,
      icon: "🔍",
      title: "Sourcing & Quality Verification",
      desc: "We identify trusted suppliers and verify commodity quality before processing.",
      duration: "3-5 Days",
      docs: "Quality Report, Supplier Details",
      details: [
        "Supplier identification",
        "Sample verification",
        "Quality inspection",
        "Compliance checks",
        "Final sourcing approval",
      ],
    },

    {
      id: 4,
      icon: "🏭",
      title: "Processing & Packaging",
      desc: "Products are processed, cleaned, graded, and packed as per export standards.",
      duration: "4-6 Days",
      docs: "Packaging Report, QC Certificate",
      details: [
        "Commodity cleaning",
        "Sorting and grading",
        "Packaging preparation",
        "Label verification",
        "Quality assurance approval",
      ],
    },

    {
      id: 5,
      icon: "🚢",
      title: "Logistics & Shipping",
      desc: "Efficient transportation and export logistics coordination.",
      duration: "5-7 Days",
      docs: "Shipping Bill, Invoice",
      details: [
        "Container booking",
        "Shipping coordination",
        "Freight management",
        "Export documentation",
        "Port handling",
      ],
    },

    {
      id: 6,
      icon: "🛃",
      title: "Customs Clearance",
      desc: "Smooth customs clearance and regulatory compliance process.",
      duration: "2-4 Days",
      docs: "Customs Docs, Clearance Certificate",
      details: [
        "Customs filing",
        "Duty processing",
        "Inspection clearance",
        "Regulatory approval",
        "Final export clearance",
      ],
    },
    {
      id: 7,
      icon: "📦",
      title: "Final Delivery & Support",
      desc: "We ensure final delivery confirmation and provide post-delivery support.",
      duration: "1-2 Days",
      docs: "Delivery Note, Final Report",
      details: [
        "Final delivery confirmation",
        "Client feedback collection",
        "Post-delivery documentation",
        "Issue resolution support",
        "Relationship management",
      ],
    },
  ];
  const currentStep = steps[activeStep];

  return (
    <>
      <div className="trade-hero">
        <Container>
          <div className="trade-overlay-content">
            <h1>Our Transparent Trade Process</h1>

            <p>
              A transparent methodology for global agricultural commodities
              trading, step-by-step approach to global agricultural commodities
              trading
            </p>
          </div>
        </Container>
      </div>
      <div className="trade-process-section">
        <Container>
          <div className="trade-tabs-wrapper">
            <div className="trade-steps-tabs">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  className={activeStep === index ? "active" : ""}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="tab-icon">{step.icon}</div>

                  <h4>Step {step.id}</h4>

                  <p>{step.title}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="trade-detail-box">
            <Row>
              <Col lg={5}>
                <div className="trade-detail-left">
                  <div className="big-icon">{currentStep.icon}</div>

                  <h2>
                    Step {currentStep.id}: {currentStep.title}
                  </h2>

                  <p>{currentStep.desc}</p>

                  <div className="trade-info">
                    <div className="trade-info-icon">⏱</div>

                    <div className="trade-info-text">
                      <strong>Average Duration</strong>
                      <h4>{currentStep.duration}</h4>
                    </div>
                  </div>

                  <div className="trade-info">
                    <div className="trade-info-icon">📋</div>

                    <div className="trade-info-text">
                      <strong>Key Documents</strong>
                      <h4>{currentStep.docs}</h4>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={7}>
                <div className="trade-detail-right">
                  <h3>Process Details</h3>

                  {currentStep.details.map((detail, index) => (
                    <div className="detail-row" key={index}>
                      <span>{index + 1}</span>

                      <p>{detail}</p>
                    </div>
                  ))}

                  <div className="trade-buttons">
                    <button
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep(activeStep - 1)}
                    >
                      ← Previous Step
                    </button>

                    <button
                      disabled={activeStep === steps.length - 1}
                      onClick={() => setActiveStep(activeStep + 1)}
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="complete-timeline-section">
  <Container>
    <div className="section-title">
      <h2>Complete Process Timeline</h2>
    </div>

    <Row className="g-4">
      {steps.map((step) => (
        <Col lg={4} md={6} key={step.id}>
          <div className="timeline-card">
            <div className="timeline-card-head">
              <span>{step.id}</span>
              <div className="timeline-icon">{step.icon}</div>
              <h3>{step.title}</h3>
            </div>

            <p>{step.desc}</p>

            <div className="timeline-meta">
              <div>⏱ {step.duration}</div>
              <div>📋 {step.docs}</div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</div>
<div className="process-benefits-section">
  <Container>
    <div className="section-title">
      <h2>Benefits of Our Process</h2>
    </div>

    <Row className="text-center g-4">
      <Col lg={4}>
        <div className="benefit-card">
          <div className="benefit-icon">👁️</div>
          <h3>Transparency</h3>
          <p>
            Complete visibility at every stage with regular updates and documentation
          </p>
        </div>
      </Col>

      <Col lg={4}>
        <div className="benefit-card">
          <div className="benefit-icon">⚡</div>
          <h3>Efficiency</h3>
          <p>
            Streamlined process that reduces time and eliminates unnecessary steps
          </p>
        </div>
      </Col>

      <Col lg={4}>
        <div className="benefit-card">
          <div className="benefit-icon">✅</div>
          <h3>Quality Control</h3>
          <p>
            Multiple quality checkpoints ensuring consistent quality standards
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</div>
    </>
  );
};
