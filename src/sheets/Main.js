import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import CharacterContext from './CharacterContext';
import { Accordion, Form, Button, Alert } from 'react-bootstrap';

const Main = () => {
    const { characterData, setCharacterData } = useContext(CharacterContext);
    const [formData, setFormData] = useState(characterData);
    const [fileName, setFileName] = useState('5E_character');

    useEffect(() => {
        console.log('Character Data in Main Component:', characterData);
        setFormData(characterData); // Update form data when character data changes
    }, [characterData]);

    const handleInputChange = (event, group, field) => {
        const updatedData = { ...formData };
        updatedData[group][field] = event.target.value;
        setFormData(updatedData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Convert formData to JSON string
        const jsonData = JSON.stringify(formData, null, 2);

        // Create a Blob containing the JSON data
        const blob = new Blob([jsonData], { type: 'application/json' });

        // Create a link element
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${fileName}.json`;

        // Trigger the download
        link.click();
    };

    return (
        <>
            <Helmet>
                <title>Main Sheet</title>
            </Helmet>
            <Form onSubmit={handleSubmit}>                
            <Accordion>
                {Object.entries(formData).map(([group, data], index) => (
                    group !== "Always Visible" ? (
                        <Accordion.Item eventKey={index} key={group}>
                            <Accordion.Header>{group}</Accordion.Header>
                            <Accordion.Body>
                                {Object.entries(data).map(([field, fieldValue]) => (
                                    <Form.Group className="mb-3" controlId={`field-${field}`} key={field}>
                                        <Form.Label>{field}</Form.Label>
                                        <Form.Control 
                                            defaultValue={fieldValue} 
                                            onChange={(event) => handleInputChange(event, group, field)}
                                        />
                                    </Form.Group>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    ) : (
                        <div key={group}>
                            {Object.entries(data).map(([field, fieldValue]) => (
                                <Form.Group className="mb-3" controlId={`field-${field}`} key={field}>
                                    <Form.Label>{field}</Form.Label>
                                    <Form.Control 
                                        defaultValue={fieldValue} 
                                        onChange={(event) => handleInputChange(event, group, field)}
                                    />
                                </Form.Group>
                            ))}
                        </div>
                    )
                ))}
            </Accordion>


                <br/>

                <Form.Group controlId="fileName">
                    <Form.Label>File Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={fileName}
                        onChange={(e) => setFileName(e.target.value)}
                    />
                </Form.Group>
                
                <br/>

                <Button variant="primary" type="submit">
                    Save
                </Button>
                <p className="mt-2 text-muted">Your character data will be saved as a JSON file.</p>

                <br/>
            </Form>
        </>
    );
};

export default Main;
