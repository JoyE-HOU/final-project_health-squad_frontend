import MedicineCard from '../components/MedicineCard'

function MedicationContainer(props){

    const meds = props.medications
    const listMeds = meds.map((med) =>
        console.log(med)
    )

    // console.log(listMeds);
    return(
        <div className="container">
        {/* <div className="ui four cloumn grid"> */}
            <div class="alert alert-secondary" role="alert">
                <h4>Current Prescriptions</h4>
            </div>
            
            <div>
                { props.medications.map ((med) => <MedicineCard med={med} key={med.id}/>)}
            </div>
        </div>
    )
}

export default MedicationContainer