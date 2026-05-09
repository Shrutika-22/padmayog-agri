import { NavLink, useLocation } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import PadmayogLogo from "../assets/PadmayogLogo.png";
export const Header = () => {
  const location=useLocation();
  const isContactPage=location.pathname === "/contact";
  return (
    <>
      <Navbar
  expand="lg"
  className={`custom-navbar ${isContactPage ? "contact-navbar" : ""}`}
>
        <Container>
          <NavbarBrand href="/" className="logo-box">
            <img src={PadmayogLogo} alt="Padmayog Logo" width="180" />
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <Nav className="ms-auto gap-3">
              <NavLink to="/" className="NavLink">
                Home
              </NavLink>
              <NavLink to="/about" className="NavLink">
                About
              </NavLink>
              <NavLink to="/commodities" className="NavLink">
                Commodities
              </NavLink>
              <NavLink to="/services" className="NavLink">
                Services
              </NavLink>
              <NavLink to="/trade-process" className="NavLink">
                Trade Process
              </NavLink>
              <NavLink to="/global-reach" className="NavLink">
                Global Reach
              </NavLink>
              <NavLink to="/contact" className="NavLink">
                Contact
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};
