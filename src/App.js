import './App.css';
import {Users} from "./components/Users";
import {Posts} from "./components/Posts";
import {Comments} from "./components/Comments";

export const App = () => {
    return (
        <div>
            <Users/>
            <Posts/>
            <Comments/>
        </div>
    );
}

