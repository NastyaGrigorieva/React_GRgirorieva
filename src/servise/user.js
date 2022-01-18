import axios from "axios";

import baseUrl, {api} from "../config/api";

export const user = {
    getAll: () => axios.get(baseUrl + api.users).then(value => value.data)
}