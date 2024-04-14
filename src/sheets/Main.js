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
            <div className="u_container">
                <div className = "column">
                    <p>Use the provided accordions to open up your character and edit their game statistics! Once you are done with your session,
                    feel free to save it to your device so that you can re-upload it later!</p>
                    <p>The following categories exist and contain more information for you to include, if you so wish.</p> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <p>Ability Scores: How strong, nimble or charismatic your character is! If things exist that change these values, keep track of them here, along with their scores.</p>
                    <p>Capabilities: Your proficiencies with anything that is not a skill will be recorded here. If you use the optional rule for feats, those will also be recorded here.</p>
                    <p>Skills: This will record just how proficient you are with the skills that you use. If you use a tiered proficiency system, that is also kept track of here.</p>
                    <p>Combat: Your speed, AC, and initiative bonuses are stored here. Write down any common actions in their respective categories for easy access, and if you become petrified, at least you can have that reminder while combat is still happening.</p>
                    <p>Items: What you can carry, how much you can carry, along with anything you have equipped can go here. Don't lose track of your pack mule, as adventuring can give you many a burden to carry.</p>
                    <p>Spellcasting: If you don't use spells, don't worry about this part. Heck, delete it and it's contents from the Json file, if you'd like. But, if you do use spells, having a place to put them all together is incredibly nice. </p>
                    <p>Biography: Keep track of all those things that don't affect combat or gameplay directly. Useful for roleplaying and remembering what the heck happened in the last 10 minutes (days).</p>
                    <p>Appearance: Despite everything, it's still you. </p><p>When you are done with a session, press "save" to download a file that can be uploaded to this site to open your character again.</p>
        
                </div>
                <div className = "column">
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
                </div>
            </div>
        </>
    );
};

export default Main;
