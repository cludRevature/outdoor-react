import React from "react";
import { Button } from "react-bootstrap";
import LoginInput from './LoginInput';

const Login : React.FC = () => {
    return(
        <div>
            <h1 className="text-center">Login</h1>
            <hr />
        <div className="login-container text-center">
        <LoginInput/>
        <LoginInput/>
        <Button>Log In</Button>
        <Button variant="light">Register</Button>
      </div>
      </div>
    );
}

export default Login;