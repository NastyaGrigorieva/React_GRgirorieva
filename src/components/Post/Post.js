import {Link, useNavigate} from "react-router-dom";

import css from "./Post.module.css"

export const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    return (
        <div>

            <Link className={css.link} to={id.toString()} state={post}> {title} </Link>
            <button onClick={() => navigate(`/posts/${id.toString()}`)}> Покажися</button>
        </div>
    );
};

