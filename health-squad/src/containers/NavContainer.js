import {useHistory} from 'react-router-dom'

const bannerStyle = {
    background: 'white'
}

function NavContainer(props){

    const history = useHistory()
    
    function logOut() {
        alert('Goodbye')
        localStorage.clear()
        history.push('/')
    }
    
    return(
        <div>
            <header style={bannerStyle}>
            <img className='health-squad logo'src='./healthsquad_st_logo.png' alt='health-squad logo'></img>
            <h1>Welcome back!</h1>
            {/* <h1>Welcome back, { props.user.username }!</h1> */}
            <button onClick={logOut}>Logout</button>
            </header>
        </div>
    )
}

export default NavContainer