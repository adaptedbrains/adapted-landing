import {
 createStore, applyMiddleware, compose,
} from 'redux';
import { autoRehydrate } from 'redux-persist';
import localForage from 'localforage';
import reduxThunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { logger } from "redux-logger";


import { instance as api, setAuthorizationToken } from '../config/axios';
import reducers from '../reducers';

export default (initialSavedState, req) => {
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const initialState = initialSavedState || (typeof window !== 'undefined' && window.__REDUX_STATE__) || {};

    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(
                reduxThunk.withExtraArgument({
                    api,
                    setAuthorizationToken,
                }),
                logger
            ),
            autoRehydrate(),
        ),
    );
    // Add a response interceptor
    api.interceptors.response.use(
        response => response,
        (error) => {
            // Do something with response erro
            if (
                error
                && error.response
                && error.response.data
                && error.response.data.statusCode === 401
            ) {
                // store.dispatch({
                //     type: LOGOUT_USER,
                // });
                // browserHistory.push({
                //     pathname: '/',
                //     // search: typeof window !== 'undefined' && window && window.location.search,
                // });
            }
            return Promise.reject(error);
        },
    );

    return store;
};
