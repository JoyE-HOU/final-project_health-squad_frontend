import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';

function MedAddForm(){
  
  const medicationURL = 'http://localhost:3000/api/v1/medications'

  const [prescript, setPrescript] = useState([])
  const [show, setShow] = useState(false);
  //set state of form
  const [name, setName] = useState("")
  const [time, setTime] = useState("")

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
        Add Prescription
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new prescription</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form>
          <div className="form-group row">
          <label for="example-time-input" class="col-2 col-form-label">Name</label>
            <select class="form-select" aria-label="Default select example">
              <option value={name} onChange={(e) => setName({name: e.target.value})} selected>Select new prescription</option>
                { prescript.map (med => (
              <option key={med.id}>{med.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group row">
            <label for="example-time-input" class="col-2 col-form-label">Time</label>
            <div class="col-10">
              <input class="form-control" type="time" value={time} onChange={(e) => setTime({time: e.target.value})} id="example-time-input"/>
            </div>
          </div>
          <div className="form-group row">
            <button type="submit" class="btn btn-primary">Submit</button>
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

export default MedAddForm