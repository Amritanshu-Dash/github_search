import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function search() {
  return (
    <div className='searching'>
      <InputGroup className="mb-3">
          <Button variant="outline-secondary" id="button-addon1">
            Button
          </Button>
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
    </div>
  )
}
