import {axiosServise} from "./axios.service";

import {urls} from "../config/urls";

export const userServise = {
    getAll: () => axiosServise.get(urls.users).then(value => value.data),
    getById: (id) => axiosServise.get(`${urls.users}/${id}`).then(value => value.data)
}