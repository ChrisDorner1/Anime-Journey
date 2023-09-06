import React, { createContext, useContext } from 'react';
import { useListReducer } from './reducers';

const watchListContext = createContext();
const { Provider } = watchListContext;

const WatchListProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useListReducer({
        animes: [],
        name: '',
        createdBy: '',
    });
    const addAnimeToList = (anime) => {
        dispatch({type: "ADD_TO_WATCH_LIST", payload: anime})
    }
    const addList = (name) => {
        dispatch({type: "ADD_LIST", payload: name})
    }
    return <Provider value={{anime: state.anime, name: state.name, addAnimeToList, addList}} />;
};

const useListContext = () => {
    return useContext(watchListContext);
}

export { WatchListProvider, useListContext };