import { Container, Nav, Navbar, Button } from "react-bootstrap";
import React from 'react';

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
        <Container style={{ marginTop: "30px"}}>
          <Navbar.Brand href="#home" style={{ zIndex: 1000 }}>
            <img src="../../asset/header-footer/header.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-3" style={{ zIndex: 1000 }}>
            <Nav.Link href="/" className="active border-bottom border-white border-2" style={{ color: 'white' }} >Beranda</Nav.Link>
              <Nav.Link href="/tentang" style={{ color: 'white' }}>Tentang</Nav.Link>
              <Nav.Link href="/galeri" style={{ color: 'white' }}>Galeri</Nav.Link>
              <Nav.Link href="/artikel" style={{ color: 'white' }}>Artikel</Nav.Link>
              <Nav.Link href="/kontak" style={{ color: 'white' }}>Kontak</Nav.Link>
            </Nav>
            <Nav style={{ zIndex: 1000 }}>
              <Nav.Link href="#">
                <Button>PPDB</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}