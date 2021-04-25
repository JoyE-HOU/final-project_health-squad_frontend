import MedicineCard from '../components/MedicineCard'

function MedicationContainer(props){

    // console.log(props);

    return(
        <div className="container">
        {/* <div className="ui four cloumn grid"> */}
            <div className="alert alert-secondary" role="alert">
                <h4>Current Prescriptions</h4>
            </div>
            
            <div>
                { props.medications.map ((med) => <MedicineCard med={med} key={med.id}/>)}
            </div>
        </div>
    )
}

export default MedicationContainer