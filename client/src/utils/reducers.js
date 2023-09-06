import { useReducer } from "react";
import { UPDATE_LIST } from "./actions";
import { ADD_LIST, ADD_TO_WATCH_LIST } from "./mutations";
import { ADD_USER } from "./mutations";

export default function reducer(state, action) {
    switch (action.type) {
        case UPDATE_LIST:
            return {
                ...state,
                animes: [...action.animes],
                name: action.name,
                createdBy: action.createdBy
            };
        case ADD_TO_WATCH_LIST:
            return {
                ...state,
                animes: [...action.payload, ...state.animes],
            };
        case ADD_USER: 
            return {
                ...state, 
                username: action.username,
                email: action.email,
                password: action.password,
            };
        case ADD_LIST: 
            return {
                ...state,
                name: action.name,
                createdBy: action.createdBy,
                animes: [action.animes]
            }
        default:
            return state;
    }
};

export function useListReducer(initialState) {
    return useReducer(reducer, initialState)
}