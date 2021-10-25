import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
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
        <h1 className="text-center">Friends</h1>
        <hr />
        <ul>
            <li className="friendEntry">
                <img style={{height: 30}} src={headImage} />
                <h3 style={{display: "inline"}}>Mark Applegate</h3>
                <Button style={{float: "right"}}>Profile</Button>
                <Button style={{float: "right"}} variant="danger">Unfriend</Button>
            </li>
            <li className="friendEntry">
                <img style={{height: 30}} src={headImage} />
                <h3 style={{display: "inline"}}>Tommy Smith</h3>
                <Button style={{float: "right"}}>Profile</Button>
                <Button style={{float: "right"}} variant="danger">Unfriend</Button>
            </li>
            <li className="friendEntry">
                <img style={{height: 30}} src={headImage} />
                <h3 style={{display: "inline"}}>Sarah Walters</h3>
                <Button style={{float: "right"}}>Profile</Button>
                <Button style={{float: "right"}} variant="danger">Unfriend</Button>
            </li>
        </ul>
        {/* <ul>
           {friendsList?.map(friend => <li>{friend.username}</li>)}
        </ul> */}
        </div>
    );
}

export default Friends;