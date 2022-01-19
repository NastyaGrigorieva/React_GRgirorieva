import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {userServise} from "../../services/user.servise";

export const UserDetails = () => {
    const {id} = useParams();

    const [user, setUser] = useState(null);

    useEffect(async () => {
        const user = await userServise.getById(id)
        setUser(user);
    }, [id]);

    useEffect(() => {
        setUser(false);
    }, [id]);

    if (!user) {
        return (
            <div>
                Loading...
            </div>
        );
    }

        return (
            <div className={'details'}>
                <ul>
                    <li>{user.id}</li>
                    <li> {user.name}</li>
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                </ul>
                <button onClick={() => setUser(user.id)}> Покажися</button>
            </div>
        );
    };


