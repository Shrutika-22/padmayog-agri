import {Col, Container, Row} from 'react-bootstrap';
export const GlobalReach = () => {
    return (
        <>
        <div className="global-hero">
        <Container>
          <div className="global-overlay-content">
            <h1>GlobalReach Market Connections</h1>

            <p>
            Connecting agricultural markets across 10+ countries with reliable trade
            networks. Expanding beyond borders, we connect Indian agricultural
            excellence with international demand. Operating across multiple continents,
            we've established reliable trade networks in key markets worldwide.
            </p>
          </div>
        </Container>
      </div>
      <div className="global-network-section">
  <Container>
    <div className="global-network-box">

      <h2>Our Global Network</h2>

      <p className="network-subtitle">
        Padmayog Aggrotech connects Indian agricultural excellence with
        international markets through reliable export and import networks.
      </p>

      <div className="india-hub-card">
        <h3>🇮🇳 India</h3>
        <h5>Rice • Wheat • Sugar • Pulses • Vegetables • Spices</h5>
        <p>Export & Import Hub</p>
      </div>

      <Row className="g-4 country-row">
        <Col lg={4}>
          <div className="country-card">
            <div className="down-arrow">↓</div>
            <h3>UK United Kingdom</h3>
            <p>Trade Type: Export</p>
            <div>
              <span>Rice</span>
              <span>Onion</span>
            </div>
          </div>
        </Col>

        <Col lg={4}>
          <div className="country-card">
            <div className="down-arrow">↓</div>
            <h3>UAE Dubai</h3>
            <p>Trade Type: Export</p>
            <div>
              <span>Rice</span>
              <span>Onion</span>
            </div>
          </div>
        </Col>

        <Col lg={4}>
          <div className="country-card">
            <div className="down-arrow">↓</div>
            <h3>BD Bangladesh</h3>
            <p>Trade Type: Export</p>
            <div>
              <span>Rice</span>
              <span>Onion</span>
            </div>
          </div>
        </Col>
      </Row>

    </div>
  </Container>
</div>
<div className="countries-section">
  <Container>

    <div className="section-title">
      <h2>Countries We Serve</h2>

      <p>
        We are actively expanding our international footprint. New markets
        and trade corridors will be announced soon as we strengthen our
        global partnerships.
      </p>
    </div>

    <div className="coming-soon-card">

      <div className="coming-icon">🌍</div>

      <h3>Coming Soon</h3>

      <div className="green-line"></div>

      <p>
        New countries and trade regions will be announced shortly as we
        expand our global presence.
      </p>

    </div>

  </Container>
</div>
<div className="trade-routes-section">
  <Container>

    <div className="section-title">
      <h2>Major Trade Routes</h2>
    </div>

    <div className="trade-routes-table">
      <table>
        <thead>
          <tr>
            <th>Origin</th>
            <th>Destination</th>
            <th>Major Commodities</th>
            <th>Frequency</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>India</td>
            <td>India</td>
            <td>Rice, Wheat, sugar, pulses, vegitables, Spices</td>
            <td><span>dependent</span></td>
          </tr>

          <tr>
            <td>India</td>
            <td>UK</td>
            <td>Rice, Onion</td>
            <td><span>dependent</span></td>
          </tr>

          <tr>
            <td>India</td>
            <td>Dubai</td>
            <td>Rice, Onion</td>
            <td><span>dependent</span></td>
          </tr>

          <tr>
            <td>India</td>
            <td>Bangaladesh</td>
            <td>Rice, Onion</td>
            <td><span>dependent</span></td>
          </tr>
        </tbody>
      </table>
    </div>

  </Container>
</div>
<div className="global-stats-section">
  <Container>

    <Row className="justify-content-center">

      <Col lg={3} md={4} sm={6}>
        <div className="global-stat-card">
          <h2>10+</h2>
          <p>Countries</p>
        </div>
      </Col>

      <Col lg={3} md={4} sm={6}>
        <div className="global-stat-card">
          <h2>15+</h2>
          <p>Years Experience</p>
        </div>
      </Col>

    </Row>

  </Container>
</div>
        </>
    )
}
