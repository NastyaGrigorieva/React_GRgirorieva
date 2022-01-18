import {axiosServise} from "./axios.service";

import {urls} from "../config/urls";

export const postServise = {
    getAll: () => axiosServise.get(urls.posts).then(value => value.data),
    getById: (id) => axiosServise.get(`${urls.posts}/${id}`).then(value => value.data)
}