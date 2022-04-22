import React from 'react';
import Form from 'react-bootstrap/Form';



export default function Upload({ handleFileChange, name }) {



    return (
        <div className={"upload_"+name}>


            <Form.Group className="mb-3">
                <Form.Control name={name}
                    onChange={handleFileChange}
                    type="file" />
            </Form.Group>


        </div>
    )
}