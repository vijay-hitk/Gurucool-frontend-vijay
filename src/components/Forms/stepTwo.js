import React , {useState} from 'react'
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

const StepTwo = ({handleInputdata ,next , previous ,formData  }) => {
    const [formErrors , setFormErrors] = useState({});
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validate(formData);

        if(Object.keys(newErrors).length > 0){
            setFormErrors(newErrors);
        }else{
            setFormErrors({});
            next();
        }
}

    const validate = (formData) => {
        const zipcodeRegex = /^[1-9][0-9]{5}$/
        const errors = {};
        if(!formData.addressLine1){
            errors.addressLine1 = 'Address Line 1 is required';
        }
        if(!formData.addressLine2){
            errors.addressLine2 = 'Address Line 2 is required';
        }
        if(!formData.city){
            errors.city = 'City is required';
        }
        if(!formData.state){
            errors.state = 'State is required';
        }
        if(!formData.zipcode){
            errors.zipcode = 'Zipcode is required';
        }else if(!zipcodeRegex.test(formData.zipcode)){
            errors.zipcode = 'zipcode is not valid'
        }
        return errors;
    }



  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter your Address line 1" 
                    name='addressLine1' 
                    onChange={handleInputdata} 
                    value={formData.addressLine1}
                    style={{ border: formErrors.addressLine1 ? "2px solid red" : "" }}
                    />
                <Form.Text className="text-danger">
                    {formErrors.addressLine1}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter your Address line 2" 
                    name='addressLine2' 
                    onChange={handleInputdata} 
                    value={formData.addressLine2}
                    style={{ border: formErrors.addressLine2 ? "2px solid red" : "" }}
                    />
                <Form.Text className="text-danger">
                  {formErrors.addressLine2}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>City</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter city" 
                    name='city' 
                    onChange={handleInputdata} 
                    value={formData.city}
                    style={{ border: formErrors.city ? "2px solid red" : "" }}
                    />
                <Form.Text className="text-danger">
                    {formErrors.city}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>State</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter state" 
                    name='state' 
                    onChange={handleInputdata} 
                    value={formData.state}
                    style={{ border: formErrors.state ? "2px solid red" : "" }}
                    />
                <Form.Text className="text-danger">
                    {formErrors.state}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Zipcode</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Enter Zipcode" 
                    name='zipcode' 
                    onChange={handleInputdata} 
                    value={formData.zipcode}
                    style={{ border: formErrors.zipcode ? "2px solid red" : "" }}
                    />
                <Form.Text className="text-danger">
                     {formErrors.zipcode}
                </Form.Text>
            </Form.Group>

            <div className='button'>
            <Button variant="primary" onClick={previous} >
                Previous
            </Button><br/><br/>
           
            <Button variant="primary" type="submit">
                Next
            </Button>
            </div>
            </Form>


        </Card.Body>
        </Card>
    </div>
  )
}

export default StepTwo