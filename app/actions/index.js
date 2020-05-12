import { browserHistory } from 'react-router';

import * as types from './types';
// example of a thunk using the redux-thunk middleware

export function updatePwa(value) {
    return function (dispatch) {
        // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
        // in this case at this point we could call a service that would persist the fuel savings
        return dispatch({
            type: types.SWITCH_PWA,
            value: value,
        });
    };
}
