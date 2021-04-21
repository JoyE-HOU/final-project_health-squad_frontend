import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function MedEditForm(){
  
  const medicationURL = 'http://localhost:3000/api/v1/medications'

  const [prescript, setPrescript] = useState([])
  const [show, setShow] = useState(false);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    const response = await fetch(medicationURL);
    const data = await response.json();
    setPrescript(data)
  }
  // console.log(prescript);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
      <div>

      <Button variant="secondary" onClick={handleShow}>
        Edit Prescription
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new prescription</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Medication Name</Form.Label>
            <Form.Control as="select">
            { prescript.map (med => (
              <option key={med.id}>{med.name}</option>
            ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Set Reminder Time</Form.Label>
          <Form.Row>
          <Col xs lg="6">
            <Form.Control type="time" placeholder="hour" />
          </Col>
          </Form.Row>
          </Form.Group>
          <Button variant="primary">
            Submit
          </Button>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>

    )

}

export default MedEditForm