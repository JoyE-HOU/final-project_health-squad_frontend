import React, {useState, useEffect} from 'react'
import { 
  BrowserRouter as Router, 
  Route, 
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';

import WelcomeContainer from './containers/WelcomeContainer'
import UserContainer from './containers/UserContainer'

import SignUpForm from './components/SignUpComponent';
import LoginForm from './components/LoginComponent'

function App() {
  const [user, setUser] = useState(null)
  // const [user, setUser] = useState({})
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
          // console.log(data)
          setUser(data.user)
        })
      }
    }
    //added 'user' to line 38, remove it issues arise.
  },[user])

  const handleLogin = (input) => {
    setUser(input)
  }

  const handleFormSwitch = (input) => {
    setForm(input)
  }

  // console.log(user)
  
  // const token = localStorage.getItem("token")

  // const currentUser = 

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
    <div className="Landing">
        <Router>
          <Switch>
            <Route exact path='/'>
            <WelcomeContainer handleFormSwitch={handleFormSwitch}/>
            {
              renderForm()
            }
            </Route>
            
            <Route path='/user'>
              <div className="user_container">{
                localStorage.getItem('token') ? <UserContainer user={user}/> : <Redirect to="/" />
              }</div>
            </Route>

            <Route >
              <Redirect to='/' />
            </Route>
          </Switch>
        </Router>
    </div>
    // </div>
  );
}

export default App;
