import { Card, CardBody, Container } from "react-bootstrap"

export const AboutIntro=()=>{
    return(
        <div className="about-intro-section">
            <Container>
                <Card className="about-intro-card mt-5">
                   <CardBody>
                     <h2>Smart Digital B2B Hub for Global Agri Trade</h2>
                    <p>
                       Padmayog Agrotech empowers buyers to source agricultural commodities through a secure, transparent, and performance-driven B2B platform built for scale, consistency, and trust. We streamline procurement by connecting buyers with verified producers, processors, and suppliers, delivering assured quality, competitive market-linked pricing, and reliable on-time fulfilment—across volumes, markets, and geographies.
                    </p>

                    <p>
                       From contract structuring and compliance to logistics coordination and documentation, we manage the entire trade lifecycle, allowing buyers to focus on growth while we handle execution. With proven expertise in domestic and international trade, exports, imports, value-added processing, and integrated logistics, Padmayog Agrotech serves as a single-window, risk-managed sourcing partner, enabling efficient, predictable, and scalable commodity procurement. 
                    </p>
                    <div className="about-quote">
                          "Grow smarter, business badhao Padmayog Aggrotech ke saath..!"
                    </div>
                   </CardBody>
                </Card>
            </Container>
        </div>
    )

}