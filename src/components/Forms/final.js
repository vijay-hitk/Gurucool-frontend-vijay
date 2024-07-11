import React from 'react'
import {Card} from 'react-bootstrap'
import { Button,Form  } from 'react-bootstrap';

const Final = ({formData , previous}) => {

    const {name , email , phone , addressLine1 , addressLine2 , city , state , zipcode } = formData;
    const handleSubmit = () => {

    }
  return (
    <div>
        <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
            <Form onSubmit='handleSubmit'>
          <p>
            <strong>Name :</strong> {name}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
          <p>
            <strong>Phone :</strong> {phone}{" "}
          </p>
          <p>
            <strong>Address Line 1 :</strong> {addressLine1}{" "}
          </p>
          <p>
            <strong>Address Line 2:</strong> {addressLine2}{" "}
          </p>
          <p>
            <strong>City:</strong> {city}{" "}
          </p>
          <p>
            <strong>State :</strong> {state}{" "}
          </p>
          <p>
            <strong>Zipcode :</strong> {zipcode}{" "}
          </p>
          <div className='button'>
          <Button variant="primary" onClick={previous} >
                Previous
            </Button><br/><br/>
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </div>
            </Form>
        </Card.Body>
      </Card>

    </div>
  )
}

export default Final