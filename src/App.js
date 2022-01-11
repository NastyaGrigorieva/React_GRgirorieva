import './App.css';

import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Comments/Comments";

export const App = () => {
    return (
        <div className={'father'}>
            <div className={"flex"}>
                <div className={'users'}><Users/></div>

                <div className={'post'}><Posts/></div>
            </div>
           <div className={'comment'}> <Comments/></div>
        </div>
    );
}

