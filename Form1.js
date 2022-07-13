import React from 'react'
import {Form,Button,Row,Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Components/css/form.css"

function Form1() {
  return (
    <div>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="email" placeholder=" e.g. Example Inc" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Industry</Form.Label>
     
        <Form.Select aria-label="Default select example">
      <option>Select</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>

       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company Size</Form.Label>
        
        <div className='form-button-bottom'>
            <Button variant="secondary">1-20</Button>
            <Button  variant="secondary">21-50</Button>
            <Button  >51-200</Button>
            <Button variant="secondary">201-500</Button>
            <Button variant="secondary">500+</Button>
            </div>

   
        </Form.Group>
     
    
    </Form>
    <div className='button-class-bottom-1'> <Button variant="primary"  className='button-class-bottom-12' type="submit"> Get started </Button></div>
   
    </div>
  )
}

export default Form1