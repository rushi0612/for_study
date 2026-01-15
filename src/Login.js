import { useState } from "react";
import './MyPage.css';
import { Navigate, useNavigate } from "react-router-dom";


function Login(){
    const [username, setUsername]=useState(undefined);
    const [password, setPassword]=useState(undefined);
    const [message, setMessage]=useState(undefined);
    let navigate=useNavigate();
    function checkLogin(e){
        e.preventDefault();
        if(username=="admin" && password==="12345"){
            navigate("/admin")
        }
        else{
            setMessage("Invalid userid and password")
        }
    }
    return(
        <div>

            <form onSubmit={checkLogin}>
                <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter User name" />
                <br />
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
                <br />
                <input type="submit" value="Login Form" /><br />
                {message}
            </form>
        </div>
    )
}

export default Login;