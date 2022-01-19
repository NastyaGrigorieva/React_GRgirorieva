import {axiosServise} from "./axios.service";

import {urls} from "../config/urls";

export const commentServise = {
    getAll: () => axiosServise.get(urls.comments).then(value => value.data),
    getById: (id) => axiosServise.get(`${urls.comments}/${id}`).then(value => value.data)
}