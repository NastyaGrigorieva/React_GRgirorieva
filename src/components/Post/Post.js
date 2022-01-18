import {Link} from "react-router-dom";

export const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <Link to={id.toString()} state={post}> {title} </Link>
        </div>
    );
};

