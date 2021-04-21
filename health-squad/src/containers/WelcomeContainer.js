import React from 'react'

function WelcomeContainer(props){
    return(
        <div>
            <img className='health-squad logo'src='./healthsquad_st_logo.png' alt='health-squad logo'></img>
            <br></br>
            <button type="button" class="btn btn-primary btn-sm mr-1" href='/login' onClick={() => props.handleFormSwitch("login")}>Log In</button>

            <button type="button" class="btn btn-primary btn-sm" href='/signup' onClick={() => props.handleFormSwitch("signUp")}>Sign Up</button>
        </div>
    )
}

export default WelcomeContainer;