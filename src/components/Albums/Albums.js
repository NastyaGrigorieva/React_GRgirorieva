import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {albumServise} from "../../services/album.servise";
import {Album} from "../Album/Album";
import styles from "./Albums.module.css"


export const Albums = () => {
    const {id} = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(async () => {
        const albums = await albumServise.getById(id)
        setAlbums(albums);
    }, [id]);

    return (
        <div className={styles.father}>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};
