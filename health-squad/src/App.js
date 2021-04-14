import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import WelcomeContainer from './containers/WelcomeContainer'
import UserContainer from './containers/UserContainer'

import SignUpForm from './components/SignUpComponent';
import LoginForm from './components/LoginComponent'

function App() {
  const [user, setUser] = useState(null)
  const [form, setForm] = useState("")
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!user){
      if(token){
        fetch('http://localhost:3000/api/v1/profile', {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        })
        .then(r => r.json())
        .then(data => {
          console.log(data)
          setUser(data.user)
        })
      }
    }
  },[])

  const handleLogin = (input) => {
    setUser(input)
  }

  const handleFormSwitch = (input) => {
    setForm(input)
  }

  console.log(user)

  const renderForm = () => {
    switch(form){
      case "login":
        return <LoginForm handleLogin={handleLogin}/>
        break;
        default:
          return <SignUpForm handleLogin={handleLogin}/>
    }
  }

  return (
    <div className="App">
        {/* <button onClick={signUp}>hello</button> */}
        <WelcomeContainer handleFormSwitch={handleFormSwitch}/>
        {
          renderForm()
        }
        <UserContainer/>
    </div>
  );
}

export default App;
