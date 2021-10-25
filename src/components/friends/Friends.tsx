import axios from "axios";
import React, { useEffect, useState } from "react";
import Friend from "../../models/Friend";
import headImage from "./friendAvatar.svg"



const Friends : React.FC = () => {
    // const [friendsList, setFriendsList] = useState<Friend[]>();

    // useEffect(() => {
    //     axios.get('/data/user')
    //         .then(res => {
    //             let friends = res.data as Friend[];
    //             setFriendsList(friends);
    //         })

    // }, []);

    return(
        <div>
        <h1>Friends</h1>
        // example output after transition to components:
        <ul>
            <li className="friendEntry">
                <h3>Mark Applegate</h3>
                <img style={{height: 30}} src={headImage} />
            </li>
        </ul>
        {/* <ul>
           {friendsList?.map(friend => <li>{friend.username}</li>)}
        </ul> */}
        </div>
    );
}

export default Friends;