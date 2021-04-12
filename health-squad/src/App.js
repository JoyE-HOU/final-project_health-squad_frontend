import logo from './logo.svg';
import './App.css';


// .then(console.log)

function App() {
  const signUp = () => {
    fetch('http://localhost:3000/api/v1/users' , {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: "kurama_yu",
      password: "rip2021"
    }
  })
})
.then(r => r.json())
.then(userData => {
  console.log(userData) 
  localStorage.token = userData.jwt
})
  }

  return (
    <div className="App">
        <button onClick={signUp}>hello</button>
    </div>
  );
}

export default App;
