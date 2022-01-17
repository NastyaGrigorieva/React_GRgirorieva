import {axios} from "axios";
import {api} from "../config/api";

export const user = {
    getAll:()=>axios.get(api.users).then(value => value.data)
}