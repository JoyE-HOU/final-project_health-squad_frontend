import React, {useEffect, useState} from 'react'

//containers
import NavContainer from './NavContainer'
// import MedicationContainer from './MedicationContainer'
// import ReminderContainer from './ReminderContainer'
// import RefillContainer from './RefillContainer'

//forms
// import MedAddForm from '../forms/MedAddForm'
// import MedEditForm from '../forms/MedEditForm'

// import CreatePDF from '../forms/CreatePDF'



const prescriptionURL = 'http://localhost:3000/api/v1/prescriptions'

function UserContainer(props){

    // console.log(props.user.id);

    const [medications, setMedications] = useState([])
    //change greeting based on time of day
    const [hour, setHour] = useState(null)
    //new prescription form
    const [add, setAdd] = useState({
        name: "",
        time: ""
    })
    
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
    // console.log(medications);
    
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
    
    const removeMed = (e) => {
        const id = e.target.getAttribute("id")
        setMedications(medications.filter(med => console.log(med)))
    }

    let currentYear = new Date().getFullYear();

    return(
        <div className="container">
            <div>
                <NavContainer user={props.user} hour={hour}/>
            </div>
            <br></br>
            <div className="row">
                <div className="col-">
                    {/* <MedicationContainer removeMed={removeMed} medications={medications}/> */}
                    <br></br>
                    {/* <CreatePDF medications={medications}/> */}
                    <br></br>
                    {/* <MedAddForm user={props.user}/> */}
                    <br></br>
                    {/* <MedEditForm /> */}
                </div>
                <div className="col-md">
                    {/* <RefillContainer medications={medications}/> */}
                    <br></br>
                    {/* <ReminderContainer medications={medications}/> */}
                        {/* <div className="btn-group" role="group" aria-label="Basic example">
                            <button onClick={Hello} type="button" className="btn btn-secondary">Add</button>
                            <button onClick={Hello} type="button" className="btn btn-secondary">Edit</button>
                        </div> */}
                </div>
            </div>
            <br></br>
            <footer className="bg-light text-center text-lg-start">
                <div className="footer-copyright text-center py-3">© {currentYear} Copyright: Health Squad </div>
            </footer>
        </div>
    )
}

export default UserContainer