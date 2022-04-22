import React from 'react';
import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function Register() {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");


    // const [password, setPassword] = useState("");



    const handleSubmit = async (event) => {
        event.preventDefault();
        let user = {
            firstName: firstName,
            lastName: lastName,
            roleId: 1
        };

        try {
            let res = await axios.post("http://localhost:3000/user/new", user)
            if (res.status === 200) {
                console.log(res)
                setFirstName("");
                setLastName("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }

        } catch (err) {
            console.log(err);
            setMessage("Errors")
        }


    }




    return (
        <div className="justify-content-center">
            <Form onSubmit={handleSubmit} className="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text" placeholder="Enter your First Name" />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text" placeholder="Enter your Last Name" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </Form>
        </div>
    )
}