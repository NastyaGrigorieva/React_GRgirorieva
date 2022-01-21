import {useEffect, useState} from "react";
import {userServise} from "../../services/user.servise";
import {User} from "../User/User";

export const Users = () => {
    const [users, setUsers] = useState([]);


    useEffect(async () => {
        const users = await userServise.getAll()
        setUsers(users);
    }, []);

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};
