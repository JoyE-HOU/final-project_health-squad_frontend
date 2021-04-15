// import React, {useEffect, useState} from 'react'

//containers
import NavContainer from './NavContainer'
import MedicationContainer from './MedicationContainer'
import ReminderContainer from './ReminderContainer'
import RefillContainer from './RefillContainer'

function UserContainer(props){
    return(
        <div className="container">
         <div>
         <NavContainer user={props.user}/>
         </div>
        <div className="row align-items-start">
            <div className="col">
         <MedicationContainer/>
            One of three columns
            </div>
            <div className="col-lg">
         <RefillContainer/>
         <ReminderContainer/>
            One of three columns
            </div>
        </div>
        </div>
    )
}

export default UserContainer