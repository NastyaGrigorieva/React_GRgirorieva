import {Link} from "react-router-dom";

export const Comment = ({comment}) => {
    const {id, name} = comment;
    return (
        <div>
            <Link to={id.toString()} state={comment}> {name} </Link>
        </div>
    );
};

