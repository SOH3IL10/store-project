import React,{ useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const StateContext = React.createContext();
const DispatcherContext = React.createContext();


export function useStateContext() {
    const context = useContext(StateContext);

    if(!context)
        throw Error('useState must be used with a AuthProvider')

    return context;
}

export function useDispatch() {
    const context = useContext(DispatcherContext);

    if(!context)
        throw Error('useDispatch must be used with a AuthProvider')

    return context;
}

export function StateProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <StateContext.Provider value={state} >
            <DispatcherContext.Provider value={dispatch}>
                {children}
            </DispatcherContext.Provider>
        </StateContext.Provider>
    )
} 