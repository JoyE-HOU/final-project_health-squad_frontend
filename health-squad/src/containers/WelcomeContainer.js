import React from 'react'

const welcomeStyle = {
    background: 'white'
}
function WelcomeContainer(props){
    return(
        <div style={welcomeStyle}>
            {/* <h1 style={{color: "white"}}>HealthSquad</h1> */}
            <img className='health-squad logo'src='./healthsquad_st_logo.png' alt='health-squad logo'></img>
            <br></br>
            <button className="ui button" href='/signup' onClick={() => props.handleFormSwitch("signUp")}>Sign Up</button>
            <button className="ui button" href='/login' onClick={() => props.handleFormSwitch("login")}>Log In</button>
        </div>
    )
}

export default WelcomeContainer;