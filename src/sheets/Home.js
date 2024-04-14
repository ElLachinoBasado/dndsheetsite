import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import { Container, Row, Col, Button } from 'react-bootstrap'; // Assuming you're using Bootstrap for styling

const Home = () => {
    return (
        <Container>
            <Row>
                <Col className="column">
                    <h2>Upload</h2>
                    <p>If you are a returning user, use this to load your character.</p>
                    <Link to="/"> {/* Use Link component from react-router-dom to navigate to Page 1 */}
                        <Button variant="primary">Upload Your Character</Button>
                    </Link>
                </Col>
                <Col className="column">
                    <h2>Main</h2>
                    <p>Otherwise, come here to create a new one, then fill in your little guy's information!</p>
                    <Link to="/Main"> {/* Use Link component from react-router-dom to navigate to Page 2 */}
                        <Button variant="primary">Create New Character</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
