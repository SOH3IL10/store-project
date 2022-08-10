import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export function get(url, config = {}) {
    return axios.get(url , config)
        .then(response => response.data)
        .catch(error => error.message)
}

