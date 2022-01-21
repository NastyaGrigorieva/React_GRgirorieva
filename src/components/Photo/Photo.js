
import React from 'react';
import {Link, useNavigate} from "react-router-dom";

import styles from "./Photo.module.css"

export const Photo = ({photo}) => {
    const {id, title, url} = photo;

    return (
        <div>
            <img className={styles.img} src={url} alt=""/>
            <Link className={styles.father} to={`albums/${id.toString()}/photos`} state={photo}> {title} </Link>
            {/*<button className={'button'} onClick={() => navigate(`albums/${id.toString()}/photos`)}> Покажися</button>*/}
        </div>
    );
};

