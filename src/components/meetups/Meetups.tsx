import React from "react";
import { Button } from "react-bootstrap";

const Meetups : React.FC = () => {
    return(
        <div>
            <h1 className="text-center">Meetups</h1>
            <hr />
            <ul>
                <li className="meetupEntry">
                    <h3>Colorado Adventuring Group</h3>
                    <p>Hey guys we will be meeting at the parking lot and hiking to the top of the trail.</p>
                    <p>Time: 10:00 AM, 10/24/2021</p>
                    <Button>Join</Button>
                    <Button variant="light">Information</Button>
                </li>
                 <li className="meetupEntry">
                    <h3>"History Hikes" Group</h3>
                    <p>We will start at the musuem... 10AM sharp everyone!!</p>
                    <p>Time: 10:00 AM, 10/24/2021</p>
                    <Button>Join</Button>
                    <Button variant="light">Information</Button>
                </li>
            </ul>
        </div>
    );
}

export default Meetups;