import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function MedEditForm(props){
  
  const prescriptionURL = 'http://localhost:3000/api/v1/prescriptions/'

  const [prescript, setPrescript] = useState([])
  const [show, setShow] = useState(false);

  // const [name, setName] = useState(props.med.medication.name)
  const [time, setTime] = useState("HH:mm")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(props);

  let handleSubmit = (e) => {
    // e.preventDefault()

    let editMed = {
      id: props.med.id,
      user_id: props.med.user_id,
      medication_id: props.med.medication_id,
      reminder: time.time
    }

    console.log(editMed);

    let reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "PATCH",
      body: JSON.stringify(editMed)
    }

    fetch(prescriptionURL+props.med.id, reqObj)
      .then(r => r.json())
      .then(console.log)
  }

    return(
      <div>

      <Button variant="secondary" onClick={handleShow}>
        Edit Prescription
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit existing prescription</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form onSubmit={handleSubmit}>
          <div className="form-group row">
          <label for="example-time-input" class="col-2 col-form-label">Name</label>
            
            {/* <select value={name} onChange={(e) => setName({name: e.target.value})} class="form-select" aria-label="Default select example"> */}
            {/* <select name="name" value={name} onChange={(e) => setName({name: e.target.value})} class="form-select" aria-label="Default select example"> */}
            <select class="form-select" aria-label="Default select example">
              
              <option>{props.med.medication.name}</option>
            
            </select>
          </div>
          <div className="form-group row">
            <label for="example-time-input" class="col-2 col-form-label">Time</label>
            <div class="col-10">
              {/* <input class="form-control" type="time" value={time} onChange={(e) => setTime({time: e.target.value})} id="example-time-input"/> */}
              {/* <input name="time" class="form-control" type="time" value={time} onChange={(e) => setTime({time: e.target.value})} id="example-time-input"/> */}
              {/* <input class="form-control" type="time" onChange={(e) => setTime({time: e.target.value})} id="example-time-input"/> */}
              <input class="form-control" type="time" onChange={(e) => setTime({time: e.target.value})} id="example-time-input"/>
            </div>
          </div>
          <div className="form-group row">
            <button type="submit" class="btn btn-primary">Update</button>
          </div>
        </form>

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