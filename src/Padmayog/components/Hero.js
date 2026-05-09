import { Button, Container } from "react-bootstrap";

export const Hero=()=>{
    return(
        <div className="hero-section" >
        <Container>
            <div className="hero-content">
                <h1>Global Agricultural Solutions Rooted in Indian Excellence</h1>
                <p>
                    Sustainable sourcing, advanced processing, and dependable global
                    delivery. 
                </p>
                <div>
                    <Button variant="light" className="me-3">
                        Request a Quote  andadjddjdewej
                    </Button>
                    <Button variant="outline-light">
                    Our Services    
                    </Button>
                </div>
                <div className="stats-box">
                    <div>
                        <h2>50,000+</h2>
                        <p>Tons Traded</p>
                    </div>
                    <div>
                        <h2>10+</h2>
                        <p>Countries Served</p>
                    </div>
                    <div>
                        <h2>15+</h2>
                        <p>Years Experience</p>
                    </div>
                    <div>
                        <h2>100+</h2>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>
        </Container>
        <div className="vendor-wrapper">
            <div className="vendor-box">
            👤 Vendor Registration
        </div>
        <div className="vendor-tag">
            Join Our Network
            </div>
        </div>
        </div>
    );
};