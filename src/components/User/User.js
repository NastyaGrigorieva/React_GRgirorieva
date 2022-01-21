import {Link, useNavigate } from "react-router-dom";

import styles from "./User.module.css"

export const User = ({user}) => {
    const {id, name} = user;
    const navigate = useNavigate();
    return (
        <div>
            <Link className={styles.link} to={id.toString()} state={user}> {name} </Link>
            <button className={styles.button} onClick={() => navigate(id.toString())}> Покажися</button>
            <button className={styles.button} onClick={() => navigate(`${id.toString()}/albums`)}> Альбом</button>

        </div>
    );
};
