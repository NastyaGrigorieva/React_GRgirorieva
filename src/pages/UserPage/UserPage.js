import {Outlet} from "react-router-dom";


import {Users} from "../../components/Users/Users";
import css from "./UserPage.module.css"

export const UserPage = () => {
    return (
        <div className={css.flex}>
            <Users/>
            <Outlet/>
        </div>
    );
}