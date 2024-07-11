import React, { useEffect } from 'react'
import { Form, Card, Button } from "react-bootstrap";
import { useState } from 'react';
import validator from 'validator';

const StepOne = ({next,handleInputdata , formData}) => {

    const [formErrors , setFormErrors] = useState({});
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate(formData);

        if(Object.keys(newErrors).length > 0){
            setFormErrors(newErrors);
        }
        else {
            setFormErrors({});
            next();
        }
       
    
 };

     const validate = (formData) => {
        const phoneRegex = /^[6-9]\d{9}$/
        const errors = {};
        if(!formData.name){
            errors.name = 'Name is required';
        }
        if(!formData.email){
            errors.email = 'Email is required';
        }else if(!validator.isEmail(formData.email)){
            errors.email = 'Email is not valid';
        }
        if(!formData.phone){
            errors.phone = 'Phone is required';
        }else if(!phoneRegex.test(formData.phone)){
            errors.phone = 'Phone is not valid'
        }
        return errors;
    }




  return (
    <>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
       
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter your name" 
                    name='name' 
                    onChange={handleInputdata} 
                    value={formData.name}  
                    style={{ border: formErrors.name ? "2px solid red" : "" }}
                />
                <Form.Text className="text-danger">
                {formErrors.name}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter email address" 
                    name='email' 
                    onChange={handleInputdata} 
                    value={formData.email}
                    style={{ border: formErrors.email ? "2px solid red" : "" }}
                    />
                <Form.Text className="text-danger">
                {formErrors.email}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Phone</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="000-0000-000" 
                    name='phone' 
                    onChange={handleInputdata} 
                    value={formData.phone}
                    style={{ border: formErrors.phone ? "2px solid red" : "" }}
                    />
                <Form.Text className="text-danger">
                {formErrors.phone}
                </Form.Text>
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Next
            </Button>
            </Form>
        
            </Card.Body>
        </Card>






    
    </>
  )
}

export default StepOne