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
        <div>
            {
                JSON.stringify(user)
            }
        </div>
    );
};



