import {axiosServise} from "./axios.service";

import {urls} from "../config/urls";

export const photoServise = {
    getAll: () => axiosServise.get(urls.photos).then(value => value.data),
    getPhotoById: (id) => axiosServise.get(`${urls.albums}/${id}/photos`).then(value => value.data)
}