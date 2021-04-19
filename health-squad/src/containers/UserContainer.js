import React, {useEffect, useState} from 'react'
// import { Divider, Grid, Image, Segment } from 'semantic-ui-react'

//containers
import NavContainer from './NavContainer'
import MedicationContainer from './MedicationContainer'
import ReminderContainer from './ReminderContainer'
import RefillContainer from './RefillContainer'

import MedForm from '../forms/MedForm'

const medURL = 'http://localhost:3000/api/v1/prescriptions'

function UserContainer(props){

    console.log(props);

    const [medications, setMedications] = useState([])
    //change greeting based on time of day
    const [hour, setHour] = useState(null)
    
    useEffect(() => {
        loadData();
        //change greeting based on time of day
        getHour();
    }, [])

    const loadData = async () => {
        const response = await fetch(medURL);
        const data = await response.json();
        setMedications(data)
    }
    console.log(medications);
    
    //change greeting based on time of day
    const getHour = () => {
        const date = new Date();
        const hour = date.getHours();
        setHour(hour)
    }
    // console.log(hour);

    let Hello = () => {
            alert("Hello World!");
        }

    return(
        <div className="container">
            <div>
                <NavContainer user={props.user} hour={hour}/>
            </div>
            <br></br>
            <div className="row">
                <div className="col-">
                    <MedicationContainer medications={medications}/>
                    <MedForm />
                        <div>
                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                            <button onClick={Hello} type="button" className="btn btn-secondary">Edit</button>
                        </div>
                </div>
                <div className="col-md">
                    <RefillContainer medications={medications}/>
                    <br></br>
                    <ReminderContainer medications={medications}/>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button onClick={Hello} type="button" className="btn btn-secondary">Add</button>
                            <button onClick={Hello} type="button" className="btn btn-secondary">Edit</button>
                        </div>
                </div>
            </div>
            <br></br>
            <footer className="bg-light text-center text-lg-start">
                <div className="footer-copyright text-center py-3">© 2021 Copyright: Health Squad </div>
            </footer>


            <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


        </div>
    )
}

export default UserContainer