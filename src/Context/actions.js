import { actionTypes } from "./reducer";

export function addToBasketAction(id, image, title, price) {
    return {
        type: actionTypes.ADD_TO_BASKET,
        payload: {
            id: id,
            image: image,
            title: title,
            price: price,
            quantity: 1
        }
    }
}

export function removeFromBasketAction(id) {
    return {
        type: actionTypes.REMOVE_FROM_BASKET,
        payload: {
            id: id,
        }
    }
}

export function decrementProductQuanityAction(id) {
    return {
        type: actionTypes.DECREMENT_PRODUCT_QUANITY,
        payload: {
            id: id
        }
    }
}

export function removeBasket() {
    return {
        type: actionTypes.REMOVE_BASKET
    }
}

export function setUserAction(user) {
    return {
        type: actionTypes.SET_USER,
        payload: {
            user: user
        }
    }
}

export function removeUserAction() {
    return {
        type: actionTypes.REMOVE_USER,
    }
}

export function setDarkModeAction() {
    return {
        type: actionTypes.SET_DARK_MODE
    }
}

export function setLightModeAction() {
    return {
        type: actionTypes.SET_LIGHT_MODE
    }
}