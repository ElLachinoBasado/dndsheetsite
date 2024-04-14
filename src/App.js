import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CharacterProvider } from './sheets/CharacterContext';
import Upload from './sheets/Upload';
import Main from './sheets/Main';
import Home from './sheets/Home';

function App() {
  return (
    <CharacterProvider> 
      <Router>
        <Navbar  bg="dark" data-bs-theme="dark" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand>            
              <Link to="/dndsheetsite" className="nav-link">5E Character Sheets</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to="/upload" as={Link}>Upload Character</Nav.Link>
                <Nav.Link to="/main" as={Link}>Main Sheet</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/dndsheetsite" element = {<Home/>}/>
          <Route path="/home" element = {<Home/>}/>
        </Routes>
      </Router>
    </CharacterProvider>
  );
}

export default App;
