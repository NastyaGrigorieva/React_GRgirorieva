import React from 'react';

import {Link, Outlet} from "react-router-dom"
import styles from "./Layout.module.css";

export const Layout = () => {
    return (
        <>
            <div className={styles.header}>
                <Link className={styles.nav_bar_links} to={"/users"}>users</Link>
                <Link className={styles.nav_bar_links} to={"/posts"}>posts</Link>
            </div>
            <Outlet/>
        </>

    );
};

