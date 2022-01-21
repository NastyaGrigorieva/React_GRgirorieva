import {Outlet} from "react-router-dom";

import {Posts} from "../../components/Posts/Posts";
import css from "./PostPage.module.css"

export const PostPage = () => {

    return (
        <div className={css.flex}>
            <Posts/>
            <Outlet/>
        </div>
    );
}