import axios from "axios";
import React, { useEffect, useState } from "react";
import Friend from "../../models/Friend";



const Friends : React.FC = () => {
    const [friendsList, setFriendsList] = useState<Friend[]>();

    useEffect(() => {
        axios.get('/data/user')
            .then(res => {
                let friends = res.data as Friend[];
                setFriendsList(friends);
            })

    }, []);

    return(
        <ul>
            {friendsList?.map(friend => <li>{friend.username}</li>)}
        </ul>

    );
}

export default Friends;