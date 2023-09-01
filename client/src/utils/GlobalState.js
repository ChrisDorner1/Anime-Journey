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
    return <Provider value={[state, dispatch]} {...props} />;
};

const useListContext = () => {
    return useContext(watchListContext);
}

export { WatchListProvider, useListContext };