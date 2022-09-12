
export const initialState = {
    basket: [],
    user: null,
    theme: 'light'
}

export const actionTypes = {
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET',
    DECREMENT_PRODUCT_QUANITY: 'DECREMENT_PRODUCT_QUANITY',
    REMOVE_BASKET: 'REMOVE_BASKET',
    SET_USER: 'SET_USER',
    REMOVE_USER: 'REMOVE_USER',
    SET_DARK_MODE: 'SET_DARK_MODE',
    SET_LIGHT_MODE: 'SET_LIGHT_MODE'
}

export function reducer(state, action) {
    const index = state.basket.findIndex(basketItem => basketItem.id === action.payload?.id)
    const exist = state.basket.find(item => item.id === action.payload?.id);
    let newBasket = [...state.basket];

    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            if (exist) {
                newBasket.splice(index, 1, { ...exist, quantity: exist.quantity + 1 })
            }

            return {
                ...state,
                basket: exist ? newBasket : [...state.basket, action.payload]
            }

        case actionTypes.REMOVE_FROM_BASKET:
            if (index >= 0)
                newBasket.splice(index, 1)
            else console.warn(`Cant remove product (id: ${action.id}) as its in basket`);

            return {
                ...state,
                basket: newBasket
            }

        case actionTypes.DECREMENT_PRODUCT_QUANITY:
            if (exist)
                newBasket.splice(index, 1, { ...exist, quantity: exist.quantity - 1 })

            if (exist.quantity - 1 <= 0)
                newBasket.splice(index, 1)

            return {
                ...state,
                basket: exist ? newBasket : [...state.basket, action.payload]
            }

        case actionTypes.REMOVE_BASKET:
            return {
                ...state,
                basket: []
            }

        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.payload.user
            }

        case actionTypes.REMOVE_USER:
            return {
                ...state,
                user: null
            }

        case actionTypes.SET_DARK_MODE:
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark-theme');
            return {
                ...state,
                theme: 'dark'
            }

        case actionTypes.SET_LIGHT_MODE:
            localStorage.removeItem('theme');
            document.body.classList.remove('dark-theme');
            return {
                ...state,
                theme: 'light'
            }

        default:
            return state;
    }
}