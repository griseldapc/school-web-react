import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import '../dist/css/navbar.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
        style={{
          background: scrolling
            ? 'linear-gradient(78.96deg, #4BA3EB 2.22%, #5DDAAA 98.48%)'
            : 'transparent',
          transition: 'background 0.3s'
        }}
        variant="dark"
      >
        <Container className="cover-navbar">
          <Navbar.Brand className="navbar-logo" href="#home">
            <img src="../../asset/header-footer/header.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle className="responsive-navbar" aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-menu mx-auto gap-3 align-items-center">
              <Nav.Link href="/" style={{ color: 'white' }}>Beranda</Nav.Link>
              <Nav.Link href="/tentang" style={{ color: 'white' }}>Tentang</Nav.Link>
              <Nav.Link href="/galeri" style={{ color: 'white' }}>Galeri</Nav.Link>
              <Nav.Link href="/artikel" style={{ color: 'white' }}>Artikel</Nav.Link>
              <Nav.Link href="/kontak" style={{ color: 'white' }}>Kontak</Nav.Link>
            </Nav>
            <Nav className="button-navbar-cover">
              <Nav.Link href="#">
                <Button className="button-navbar py-1 px-4">PPDB</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
