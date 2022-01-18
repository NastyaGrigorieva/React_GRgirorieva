import {Outlet} from "react-router-dom";

import {Users} from "../../components/Users/Users";

export const UserPage = () => {
    return (
        <div>
            <Users/>
            <Outlet/>
        </div>
    );
}