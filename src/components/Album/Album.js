import {Link, useNavigate} from "react-router-dom";

import styles from "./Album.module.css"


export const Album = ({album}) => {
    const {id, title} = album;
    const navigate = useNavigate();
    return (
        <div>

            <Link className={styles.father} to={`${id.toString()}/photos`} state={album}> {title} </Link>
            <button className={styles.button} onClick={() => navigate(`${id.toString()}/photos`)}> Покажися</button>
        </div>
    );
};

