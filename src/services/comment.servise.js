import {axiosServise} from "./axios.service";

import {urls} from "../config/urls";

export const commentServise = {
    getAll: () => axiosServise.get(urls.comments).then(value => value.data),
    getCommentsByPostId: (id) => axiosServise.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}