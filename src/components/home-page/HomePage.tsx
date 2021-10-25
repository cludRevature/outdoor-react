import React from "react";
import { Button } from "react-bootstrap";
import logo from "./outDoorLogo.png"

const HomePage : React.FC = () => {
    return(
        <div className="text-center">
            <img src={logo}></img>
            <h2><u>National Park Meetup App</u></h2>
            <h3><i>plan your adventure</i></h3>
            <hr />
            <Button>Login</Button><Button variant="light">Register</Button>
            <hr />
        </div>
    );
}

export default HomePage;