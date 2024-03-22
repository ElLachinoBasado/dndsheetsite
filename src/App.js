import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Default from './sheets/Default';

function App() {
  return (
    <Router>
      <Navbar  bg="primary" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand>5E Character Sheets</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Standard</Nav.Link>
              {/* <Nav.Link href="/placeholder">Placeholder</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Default/>}/>
        {/* <Route path="/placeholder" element={<Placeholder/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
