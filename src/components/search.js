import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiSearchEyeLine } from "react-icons/ri";

export default function search() {
  return (
    <div className='searching'>
      <InputGroup className="mb-3">
          <Button className='button' variant="outline-secondary" id="button-addon">
            <RiSearchEyeLine />
          </Button>
          <input className="inputPart" type="text" placeholder="Let's search..." />
        </InputGroup>
    </div>
  )
}
