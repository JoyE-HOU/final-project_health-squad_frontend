import React, {useEffect, useState} from 'react'

//containers
import NavContainer from './NavContainer'
import MedicationContainer from './MedicationContainer'
import ReminderContainer from './ReminderContainer'
import RefillContainer from './RefillContainer'

function UserContainer(){
    return(
        <div>
        <NavContainer/>
        <MedicationContainer/>
        <RefillContainer/>
        <ReminderContainer/>
        </div>
    )
}

export default UserContainer