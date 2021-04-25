import React from 'react'

const MedicineCard = ({med}) => {

  // console.log(med.medication);

  let Hello = () => {
    alert("Hello World!");
}

  return(
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{med.medication.name}
              <br></br>
              <button onClick={Hello} className="btn btn-sm btn-outline-danger ml-4">
                Delete
              </button>
            </li>
          </ul>
  )
}

export default MedicineCard