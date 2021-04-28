import React from 'react'

import MedEditForm from '../forms/MedEditForm'

const MedicineCard = ({med}) => {

  // console.log(med.medication);

  let Hello = () => {
    alert("Hello World!");
}

  return(
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{med.medication.name}
              <br></br>
              <MedEditForm med={med}/>
              {/* <button onClick={Hello} className="btn btn-danger">
                Delete
              </button> */}
            </li>
          </ul>
  )
}

export default MedicineCard