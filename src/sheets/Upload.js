import React, { useState, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Form, Button, Toast } from 'react-bootstrap';
import CharacterContext from './CharacterContext';
import { FileUpload } from 'primereact/fileupload';
import { json } from 'react-router-dom';
        

const Upload = () => {    
    const { characterData, setCharacterData } = useContext(CharacterContext);
    const [uploadStatus, setUploadStatus] = useState(null);

    const handleFileUpload = (event) => {
        // No need to handle file upload here since we'll do it on form submission
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        // Get the uploaded file from the form input
        const file = event.target.formFile.files[0];
        
        if (!file) {
            console.error('No file selected.');
            return;
        }
    
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const jsonData = JSON.parse(e.target.result);
                console.log("32 Upload.js jsonData", jsonData);
                setCharacterData(jsonData);                
                setUploadStatus('success'); // Set upload status to success if parsing is successful
            } catch (error) {
                console.error('Error parsing JSON file:', error);
                setUploadStatus('error'); // Set upload status to error if parsing fails
            }
        };
    
        reader.readAsText(file);
    }    

    useEffect(() => {
        console.log('Character Data in Upload Component:', characterData);
    }, [characterData]); // Log characterData whenever it changes

    return (
        <>
            <Helmet>
                <title>Upload Character Sheet</title>
            </Helmet>
            <Container>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Character JSON File:</Form.Label>
                        <Form.Control
                            type="file"
                            accept=".json"
                        />
                        {/* <FileUpload accept="application/json"/> */}
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
                <Toast show={uploadStatus === 'success'}>
                    <Toast.Header>
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>File uploaded successfully!</Toast.Body>
                </Toast>
                <Toast show={uploadStatus === 'error'}>
                    <Toast.Header>
                        <strong className="me-auto">Error</strong>
                    </Toast.Header>
                    <Toast.Body>Error uploading file. Please make sure it's a valid JSON file.</Toast.Body>
                </Toast>
                {characterData && uploadStatus === 'success' && (
                    <div>
                        <h2>Uploaded Character Information:</h2>
                        <pre>{JSON.stringify(characterData, null, 2)}</pre>
                    </div>
                )}
            </Container>
        </>
    );
};

export default Upload;
