import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';

function MedAddForm(props){
  
  const medicationURL = 'http://localhost:3000/api/v1/medications'
  const prescriptionURL = 'http://localhost:3000/api/v1/prescriptions'

  const [prescript, setPrescript] = useState([])
  const [show, setShow] = useState(false);
  //set state of form
  const [name, setName] = useState("Select new prescription")
  const [time, setTime] = useState("HH:mm")

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

  let handleSubmit = (e) => {
    // e.preventDefault()

    let newMed = {
      user_id: props.user.id,
      medication_id: name,
      medication_id: parseInt(name.name),
      reminder: time.time
    }

    console.log(newMed);

    let reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(newMed)
    }

    fetch(prescriptionURL, reqObj)
      .then(r => r.json())
      .then(console.log)
  }

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

        <form onSubmit={handleSubmit}>
          <div className="form-group row">
          <label for="example-time-input" class="col-2 col-form-label">Name</label>
            
            {/* <select value={name} onChange={(e) => setName({name: e.target.value})} class="form-select" aria-label="Default select example"> */}
            {/* <select name="name" value={name} onChange={(e) => setName({name: e.target.value})} class="form-select" aria-label="Default select example"> */}
            <select onChange={(e) => setName({name: e.target.value})} class="form-select" aria-label="Default select example">
              
              <option>Select new prescription</option>
                { prescript.map (med => (
              <option value={med.id}>{med.name}</option>
              /* <option key={med.id}>{med.id}</option> */
              ))}
            
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