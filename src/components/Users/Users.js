import {useEffect, useState} from "react";

import {User} from "../User/User";
import {getAllUsers} from "../../services/API";

export const Users = ({getChosenUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(value => setUsers(value));
    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getChosenUser={getChosenUser}/>)}
        </div>
    );
};