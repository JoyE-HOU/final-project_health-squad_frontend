import RefillCard from "../components/RefillCard";

function RefillContainer(props){

    return(
        <div>
          <div className="alert alert-secondary" role="alert">
            <h4>Upcoming Refills</h4>
          </div>
          <div>
            { props.medications.map ((med) => <RefillCard med={med} key={med.id}/>)}
          </div>
        </div>
    )
}

export default RefillContainer