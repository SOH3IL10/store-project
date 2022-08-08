import axios from "axios";

axios.defaults.baseURL = 'https://fakestoreapi.com/products/';

export function get(url, config = {}) {
    return axios.get(url , config)
        .then(response => response.data)
        .catch(error => error.message)
}

