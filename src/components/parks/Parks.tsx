import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Park from "../../models/Park";
import ParkEntry from "./ParkEntry";

const Parks : React.FC = () => {
    const [parkList, setParkList] = useState<Park[]>();

    useEffect(() => {
        axios.get('https://developer.nps.gov/api/v1/parks?api_key=h2oLsaTIwyBaq0AAetwCeoRgTKdSqM1B6RiAfO3S')
            .then(res => {
                let parks : any = res.data;
                let parksData = parks["data"];
                setParkList(parksData);
            })

    }, []);

    return(
        <div>
            <h1 className="text-center">Parks</h1>
            <hr />
        <ul>
            {parkList?.map(park => 
            <li className="parkEntry">
                <h2>{park.fullName}</h2>
                <img style={{height: 60}} src={park.images[0].url} />
                <p>{park.description}</p>
                <Button>Meetup!</Button>
                <Button variant="light">Website</Button>
            </li>)}
        </ul>
        </div>
    );
}

export default Parks;