const url = 'https://jsonplaceholder.typicode.com';

export const getAllUsers = () => {
    return fetch(url + '/users')
        .then(value => value.json())
}

export const getUserById = (id) => {
    return fetch(url + '/users/' + id)
        .then(value => value.json())
}

export const getPostByUserId = (id) => {
    return fetch(url + '/users/' + id + '/posts/')
        .then(value => value.json())
}
