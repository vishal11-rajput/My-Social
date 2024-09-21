import { Link } from "react-router-dom"
import "./Register.scss"

const Register = () => {

    return(
        <div className = "register"> 
        <div className="card">
         <h1>Register</h1>
         <form >
             <input type="text" placeholder='Name' />
             <input type="text" placeholder='Username' />
             <input type="email" placeholder='Email' />
             <input type="password" placeholder='Password' />

             <button>Register</button>
         </form>
         <p>Already have an account <Link to="/login"> Login here </Link> </p>
        </div> 
    </div> 
    )
} 

export default Register