import { useReducer } from "react";
import { UPDATE_LIST } from "./actions";
import { ADD_TO_WATCH_LIST } from "./mutations";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_LIST:
            return {
                ...state,
                animes: [...action.animes],
                name: [...action.name],
                createdBy: [...action.createdBy]
            };
        case ADD_TO_WATCH_LIST:
            return {
                ...state,
                animes: [...action.animes],
                name: [...action.name],
                createdBy: [...action.createdBy]
            };
        default:
            return state;
    }
};

export function useListReducer(initialState) {
    return useReducer(reducer, initialState)
}