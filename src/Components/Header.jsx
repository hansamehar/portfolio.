import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
  return (
    <>
      <style>{`
        .nav-link:hover {
          color: #AC59C9 !important;
        }
      `}</style>
     <header className="position-fixed top-0 w-100" style={{backgroundColor:'#1a1c20'}}>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="text-white">Hansa Mehar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                <Nav.Link href="#about" className="text-white">About</Nav.Link>
                <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link href="https://github.com/hansamehar" className="text-white">
                  <GitHubIcon></GitHubIcon>
                </Nav.Link>
                <Nav.Link href="https://linkedin.com/in/hansa-mehar" className="text-white"><LinkedInIcon></LinkedInIcon></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     </header>
    </>
  );
};

export default Header;
