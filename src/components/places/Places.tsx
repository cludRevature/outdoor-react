import axios from "axios";
import React, { useEffect, useState } from "react";
import Friend from "../../models/Friend";
import Park from "../../models/Park";

const Places : React.FC = () => {
    const [parkList, setParkList] = useState<Park[]>();

    useEffect(() => {
        axios.get('https://developer.nps.gov/api/v1/parks?api_key=h2oLsaTIwyBaq0AAetwCeoRgTKdSqM1B6RiAfO3S')
            .then(res => {
                let parks : any = res.data;
                let parksData = parks["data"];
                console.log(parks);
                console.log("here2");
                console.log(parksData);
                setParkList(parksData);
            })

    }, []);

    return(
        <ul>
            {parkList?.map(park => <li>{park.fullName}</li>)}
        </ul>
    );
}

export default Places;