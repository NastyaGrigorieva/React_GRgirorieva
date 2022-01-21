import {Outlet} from "react-router-dom";


import {Albums} from "../../components/Albums/Albums";
import styles from "./AlbumPage.module.css"

export const AlbumPage = () => {
    return (
        <div className={styles.father}>
            <Albums/>
            <Outlet/>
        </div>
    );
}