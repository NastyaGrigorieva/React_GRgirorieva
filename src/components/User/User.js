import {Link} from "react-router-dom";

export const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <Link to={id.toString()} state={user}> {name} </Link>
        </div>
    );
};
