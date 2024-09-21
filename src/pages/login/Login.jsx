import React from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'
const Login = () => {

    return(
        <div className = "login"> 
           <div className="card">
            <h1>Login</h1>
            <form >
                <input type="text" placeholder='Username' />
                <input type="text" placeholder='Password' />

                <button>Login</button>
            </form>
            <p>Don't have account <Link to="/register"> Register here </Link>  </p>
           </div>
        </div>
    )
}


export default Login