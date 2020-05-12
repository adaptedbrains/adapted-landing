import { SWITCH_PWA } from '../actions/types';

const initialState = {
    pwaInstall:true,
};
export default function generalData(state = initialState, action) {
    switch (action.type) {
       
        case SWITCH_PWA:
            const newStatepwa = {...state,pwaInstall:action.value}
            return newStatepwa;
        default:
            return state;
    }
}
