import React from "react";
import { Button } from "react-bootstrap";
import LoginInput from './LoginInput';

const Login : React.FC = () => {
    return(
        <div className="login-container text-center">
        <div className="title">
         Login
        </div>
        <LoginInput/>
        <LoginInput/>
        <Button variant="dark">Log In</Button>
      </div>
    );
}

export default Login;