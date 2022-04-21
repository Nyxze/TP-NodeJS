import React, { useState } from 'react';
import Upload from '../../component/Upload';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function PhotoUpload() {

    const [formInputData, setFormInputData] = useState({
        photoName:"",
        legend:"",

    })
    const [file, setFile] = useState(null);


    const handleSubmit = async (e) => {
        const data = new FormData()
        data.append("photo",file);
        data.append("photoName",formInputData.photoName);
        data.append("legend",formInputData.legend);
        console.log(...data)
        e.preventDefault();

        try {
  
            let res = await axios.post("http://localhost:3000/photo/upload",data)

        } catch (err) {
            console.log(err)
        }
    }

    const handleInputChange = (e) => {

        const inputFieldValue = e.target.value;
        const inputFieldName = e.target.name;
        const NewInputValue = { ...formInputData, [inputFieldName]: inputFieldValue }
        setFormInputData(NewInputValue);

    }

    const handleFileChange = (e) => {
        console.log(e.target.files)
        setFile(e.target.files[0]);
    }



    return (
        <div className="uploadComponent">

            <Form  onSubmit={handleSubmit}>
                <Form.Label>Photo Name</Form.Label>
                <Form.Control name="photoName" value={formInputData.photoName}
                    onChange={handleInputChange}
                    type="text" placeholder="Enter photo name" />
                <Form.Label>Legend</Form.Label>
                <Form.Control name="legend" value={formInputData.legend}
                    onChange={handleInputChange}
                    type="text" placeholder="Describe your photo" />
                <Form.Label>Select a folder</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>

                <Upload name="photo" handleFileChange={handleFileChange} />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    )
}