import React from "react";
import { Button } from "react-bootstrap";

const Meetups : React.FC = () => {
    return(
        <div>
            <h1 className="text-center">Meetups</h1>
            <div className="meetupEntry">
                <h3>Colorado Adventuring Group</h3>
                <p>Hey guys we will be meeting at the parking lot and hiking</p>
                <p>Time: 10:00 AM, 10/24/2021</p>
                <Button>Join</Button>
            </div>
        </div>
    );
}

export default Meetups;