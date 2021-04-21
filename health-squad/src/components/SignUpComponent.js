import React, {useState} from 'react'

import { withRouter } from 'react-router'

function SignUpComponent(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user:{
                    username: username,
                    password: password
                }
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            localStorage.setItem("token", data.jwt)
            props.handleLogin(data.user)
            props.history.push('/user')
        })
        setUsername("")
        setPassword("")
    }
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    
    return(
            <form onSubmit={handleSubmit}>
                {/* <h1>Sign Up</h1> */}
                <div class="row justify-content-md-center">
            <div class="col-sm-3 my-1">
            <label for="exampleInputUsername1">Username</label>
            <input value={username} onChange={handleUsernameChange} type="text" class="form-control" id="exampleInputUsername1" placeholder="Username"/>
            </div>
    <div class="col-sm-3 my-1">
            <label for="exampleInputPassword1">Password</label>
            <input value={password} onChange={handlePasswordChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
  </div>
            <small id="emailHelp" class="form-text text-muted">We'll never share your info with anyone else.</small>
        <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
    )
}

export default withRouter (SignUpComponent)