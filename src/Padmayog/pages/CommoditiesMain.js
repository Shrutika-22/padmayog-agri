import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"

export const CommoditiesMain = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const commodities = [
        {
            title:"Tomato",
            category:"Vegetables",
            image:"https://thfvnext.bing.com/th/id/OIP.gcQSg3vkm-Ow316XwSZmVgHaE3?w=291&h=191&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3"
        },
        {
    title: "Potato",
    category: "Vegetables",
    image: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?cs=srgb&dl=pexels-victorino-2286776.jpg&fm=jpg"
  },

  {
    title: "Sesame Seeds",
    category: "Seeds",
    image: "https://thfvnext.bing.com/th/id/OIP.ow__QYbAvncYBoWQeD0OxAHaEK?w=328&h=185&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3"
  }
    ];
    const filteredCommodities = activeCategory === "All" 
    ? commodities : commodities.filter(item=>item.category===activeCategory);
    return (
       <div>
       <div className="commodities-hero">
        <Container>
            <div className="commodities-overlay-content">
                <h1>Agricultural Commodities</h1>
                 <p>We source and supply premium quality agricultural products from verified, trusted producers. 
                    Our portfolio includes essential grains, pulses, and specialty crops meeting international standards. 
                    Each commodity undergoes rigorous quality checks to ensure nutritional value, purity, and market suitability.
                 </p>
                 <div className="commodities-badge">
                    ✓ 3 commodities loaded 
                </div>
            </div>
        </Container>
        </div>
        <div className="commodity-filter-section">
            <Container>
                    <div className="commodity-filters">
                        {/* <button className="active">All Commodities</button> */}
                        <button className={activeCategory==="Vegetables"? "active":""} onClick={()=>setActiveCategory("All")}>
                            All Commodities
                        </button>
                        <button
                            className={activeCategory === "Vegetables" ? "active" : ""}
                            onClick={() => setActiveCategory("Vegetables")}
                      >
                         Vegetables
                        </button>
                        {/* <button>Pulses & Lentils</button>
                        <button>Seeds</button>
                        <button>Spices & Condiments</button>
                        <button>Sugar & Sweeteners</button>
                        <button>Dry Fruits & Nuts</button>
                        <button>Edible Oils</button> */}
                    </div>
            </Container>
        </div>
        <div className="commodity-cards-section">
                <Container>
                            <Row>
                                 {filteredCommodities.map((item,index)=>(
                                <Col lg={4} md={6} className="mb-4" key={index}>
                               <div className="commodity-detail-card">
                               <img src={item.image} alt={item.title} />
                               <div className="commodity-detail-body">
                                <h3>{item.title}</h3>
                                <p>{item.category}</p>
            </div>
            </div>
                </Col>
                ))}
        </Row>
        </Container>
        </div>

         <div className="available-data-section">
  <Container>
    <div className="available-data-box">

      <h2>Available Commodities Data</h2>

      <Row>
        <Col lg={3} md={4}>
          <div className="data-card">
            <h5>Rice</h5>

            <div className="data-count">
              8 var.
            </div>
          </div>
        </Col>

        <Col lg={3} md={4}>
          <div className="data-card">
            <h5>Non Basmati</h5>

            <div className="data-count">
              8 var.
            </div>
          </div>
        </Col>

        <Col lg={3} md={4}>
          <div className="data-card">
            <h5>White Sugar</h5>

            <div className="data-count">
              3 var.
            </div>
          </div>
        </Col>

      </Row>

    </div>
  </Container>
</div>

<div className="quality-section">
  <Container>
    <div className="section-title">
      <h2>Quality Assurance Standards</h2>
    </div>

    <Row className="g-4">
      <Col lg={3} md={6}>
        <div className="quality-card">
          <div className="quality-icon">🔬</div>
          <h3>Laboratory Testing</h3>
          <p>
            Every shipment undergoes rigorous lab testing for moisture,
            protein, purity, contaminants, and nutritional parameters.
          </p>
        </div>
      </Col>

      <Col lg={3} md={6}>
        <div className="quality-card">
          <div className="quality-icon">👁️</div>
          <h3>Visual & Physical Inspection</h3>
          <p>
            Trained inspectors verify color, size, uniformity, foreign matter,
            and physical characteristics before packaging.
          </p>
        </div>
      </Col>

      <Col lg={3} md={6}>
        <div className="quality-card">
          <div className="quality-icon">📋</div>
          <h3>Certification & Documentation</h3>
          <p>
            All commodities come with quality certificates, traceability
            documents, and compliance certificates.
          </p>
        </div>
      </Col>

      <Col lg={3} md={6}>
        <div className="quality-card">
          <div className="quality-icon">🌍</div>
          <h3>Global Standards</h3>
          <p>
            Compliance with international standards: ISO, FSSAI, FDA, EU
            regulations, and country-specific requirements.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</div>

<div className="commodity-category-section">
  <Container>
    <div className="section-title">
      <h2>Commodity Categories</h2>
    </div>

    <Row className="g-4">
      <Col lg={3} md={6}>
        <div className="category-card">
          <h3>Vegetables</h3>
          <p>8 products</p>
        </div>
      </Col>

      <Col lg={3} md={6}>
        <div className="category-card">
          <h3>Pulses & Lentils</h3>
          <p>7 products</p>
        </div>
      </Col>

      <Col lg={3} md={6}>
        <div className="category-card">
          <h3>Seeds</h3>
          <p>7 products</p>
        </div>
      </Col>

      <Col lg={3} md={6}>
        <div className="category-card">
          <h3>Spices & Condiments</h3>
          <p>12 products</p>
        </div>
      </Col>

      <Col lg={3} md={6}>
        <div className="category-card">
          <h3>Sugar & Sweeteners</h3>
          <p>4 products</p>
        </div>
      </Col>

      <Col lg={3} md={6}>
        <div className="category-card">
          <h3>Dry Fruits & Nuts</h3>
          <p>6 products</p>
        </div>
      </Col>

      <Col lg={3} md={6}>
        <div className="category-card">
          <h3>Edible Oils</h3>
          <p>7 products</p>
        </div>
      </Col>
    </Row>
  </Container>
</div>

<div className="refresh-section">
  <Container>

    <button className="refresh-btn">
      Refresh Commodities Data
    </button>

    <p>
      Click to refresh data from our database.
      Currently showing 51 products.
    </p>

  </Container>
</div>

</div>
    
        
    )
}   