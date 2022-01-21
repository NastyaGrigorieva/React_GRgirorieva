import {useParams, useNavigate, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {userServise} from "../../services/user.servise";

import styles from "./UserDetails.module.css"
export const UserDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState(null);

    useEffect(async () => {
        const userDetails = await userServise.getById(id)
        setUserDetails(userDetails);
    }, [id]);

    useEffect(() => {
        setUserDetails(false);
    }, [id]);

    if (!userDetails) {
        return (
            <div>
                Loading...
            </div>
        );
    }

        return (
            <div>
                <div>
                    <ul>
                        <li>{userDetails.id}</li>
                        <li> {userDetails.name}</li>
                        <li>{userDetails.username}</li>
                        <li>{userDetails.email}</li>
                    </ul>
                    <button  className={styles.button} onClick={() => navigate('posts')}> Покажися</button>
                </div>
                <Outlet/>
            </div>
        );
    };


