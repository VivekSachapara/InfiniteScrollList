import React, { useEffect, useState } from "react";
import "../../styles/style.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getAccessToken = localStorage.getItem("accessToken");
        if (getAccessToken && getAccessToken.length > 0) {
            navigate("/home")
        }
    }, [])

    /**
     * Submit handler function
     */
    const handleSubmit = () => {
        if (username.toLowerCase() === "foo" && password.toLowerCase() === "bar") {
            const accessToken = Math.floor(Math.random() * 90000) + 10000;
            localStorage.setItem("accessToken", accessToken);
            navigate("/home");
        }
        else {
            setError(true)
        }
    }

    /**
     * Handle username function
     * @param {Object} event 
     */
    const handleUsernameChange = (event) => {
        const value = event.target.value;
        setUsername(value)
        setError(false)
    }

    /**
     * Handle password function
     * @param {Object} event 
     */
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value)
        setError(false)
    }

    return (
        <div className="loginWrapper">
            <div className="loginBox">
                Login
            </div>
            <div className="username">
                <label>Enter Username</label>
                <input value={username} onChange={(e) => handleUsernameChange(e)}></input>
            </div>
            <div className="password">
                <label>Enter Password</label>
                <input value={password} type="password" onChange={(e) => handlePasswordChange(e)}></input>
            </div>
            <button className="submit" onClick={() => handleSubmit()}>Submit</button>
            {error && <div className="loginerror">Please enter corrent username and password</div>}
        </div>
    )
}

export default Login;
