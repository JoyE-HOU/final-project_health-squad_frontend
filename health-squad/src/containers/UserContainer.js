import React, {useEffect, useState} from 'react'

//containers
import NavContainer from './NavContainer'
import MedicationContainer from './MedicationContainer'
import ReminderContainer from './ReminderContainer'
import RefillContainer from './RefillContainer'

//forms
import MedForm from '../forms/MedForm'

const prescriptionURL = 'http://localhost:3000/api/v1/prescriptions'

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
        const response = await fetch(prescriptionURL);
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
                </div>
                <div className="col-md">
                    <RefillContainer medications={medications}/>
                    <br></br>
                    <ReminderContainer medications={medications}/>
                        {/* <div className="btn-group" role="group" aria-label="Basic example">
                            <button onClick={Hello} type="button" className="btn btn-secondary">Add</button>
                            <button onClick={Hello} type="button" className="btn btn-secondary">Edit</button>
                        </div> */}
                </div>
            </div>
            <br></br>
            <footer className="bg-light text-center text-lg-start">
                <div className="footer-copyright text-center py-3">© 2021 Copyright: Health Squad </div>
            </footer>
        </div>
    )
}

export default UserContainer