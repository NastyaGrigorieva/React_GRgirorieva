import {Outlet} from "react-router-dom";

import {Posts} from "../../components/Posts/Posts";

export const PostPage = () => {
    return (
        <div>
            <Posts/>
            <Outlet/>
        </div>
    );
}