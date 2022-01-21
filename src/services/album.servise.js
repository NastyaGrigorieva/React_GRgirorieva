import {axiosServise} from "./axios.service";

import {urls} from "../config/urls";

export const albumServise = {
    getAll: () => axiosServise.get(urls.albums).then(value => value.data),
    getById: (id) => axiosServise.get(`${urls.users}/${id}/albums`).then(value => value.data)
}