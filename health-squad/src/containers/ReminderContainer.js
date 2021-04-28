import ReminderCard from '../components/ReminderCard';

function ReminderContainer(props){
    return(
      <div>
        <div className="alert alert-secondary" role="alert">
          <h4>Current Reminders</h4>
        </div>
      <div>
        { props.medications.map ((med) => <ReminderCard med={med} key={med.id}/>)}
      </div>
    </div>
    )
}

export default ReminderContainer