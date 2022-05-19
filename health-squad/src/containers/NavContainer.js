import {useNavigate} from 'react-router-dom'

function NavContainer(props){

    const history = useNavigate()
    
    function logOut() {
        localStorage.clear()
        history.push('/')
    }

    // function greeting() {
    //     let d = new Date()
    //     let time = d.getHours()

    //     let greet
    //     if (time < 12) {
    //         document.write("Good morning")
    //     }
    //     if (time < 12) {
    //         document.write("Good morning")
    //     }console.log(time);
    // }
    
    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <img className='health-squad logo'src='./healthsquad_st_logo.png' alt='health-squad logo'></img>
                    <h1>
                    {props.hour <12 ? `Good Morning!` 
                    : props.hour >=12 && props.hour <=17 ? `Good Afternoon!`
                    : `Good Evening`
                    }
                    {/* {props.hour <12 ? `Good Morning, ${ props.user.username }!` : `Good Afternoon, ${ props.user.username }!`} */}
                    </h1>
                    <button onClick={logOut} type="button" className="btn btn-secondary">Logout</button>
            </nav>
            {/* <header style={bannerStyle}>
            <img className='health-squad logo'src='./healthsquad_st_logo.png' alt='health-squad logo'></img>
            </header> */}
            <div className="container">
                <div className='row'>
                    <div className='col'>
                    </div>
                    <div className='col'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavContainer