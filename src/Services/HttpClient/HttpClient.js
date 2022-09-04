import axios from "axios";

export function get(url='', config = {}) {
    return axios.get(`https://fakestoreapi.com/products/${url}` , config)
        .then(response => response.data)
        .catch(error => error.message)
}

export function createPaymentIntent(url, data={}) {
    return axios.post(`http://localhost:3000/${url}`, data, {
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(res => res.data)
    .catch(error => error.message)
}