import React from 'react';
import { Link } from 'react-router-dom'; 
import { Container, Row, Col, Button, Image } from 'react-bootstrap'; 

const Home = () => {
    return (
        <Container fluid>
            <Row className='justify-content-center'>
                <Col className="column" lg={2}>
                    <h2>Upload</h2>
                    <p>If you are a returning user, use this to load your character.</p>
                    <Link to="/upload"> 
                        <Button variant="primary">Upload Your Character</Button>
                    </Link>
                </Col>
                <Col className="column" lg={4}>
                    <Image src="https://img.goodfon.com/original/1920x1080/0/70/dragon-warrior-knight-creature-horse-cape-sword-weapon-armor.jpg" thumbnail/>
                </Col>
                <Col className="column" lg={2}>
                    <h2>Main</h2>
                    <p>Otherwise, come here to create a new one, then fill in your character's information!</p>
                    <Link to="/main"> 
                        <Button variant="primary">Create New Character</Button>
                    </Link>                    
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
