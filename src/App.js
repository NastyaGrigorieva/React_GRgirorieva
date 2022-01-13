import './App.css';
import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";
import {UserDetailInfo} from "./components/UserDetailInfo/UserDetailInfo";
import {getUserById} from "./services/API";
import {useState} from "react";

export const App = () => {
    const [chosenUser, setChosenUser] = useState(null);
    const [userId, setUserId] = useState(null);
//похожее на это /2
    const getChosenUser = async (id) => {
        setUserId(false)
        const user = await getUserById(id);
        setChosenUser(user)
    }
        //cделать k dеталям дополнительную кнопку,короая их закрывает /1

    return (
        <div className={'father'}>
            <div className={"flex"}>
                <div className={'users'}><Users getChosenUser={getChosenUser}/></div>

                {
                    chosenUser && <UserDetailInfo chosenUser={chosenUser} setUserId={setUserId}/>
                }
            </div>
            {
                userId && <Posts userId={userId}/>
            }
        </div>
    );
}

