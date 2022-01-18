import {User} from "../User/User";

export const Users = ({users}) => {

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};