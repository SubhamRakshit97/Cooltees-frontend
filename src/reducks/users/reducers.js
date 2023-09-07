//Reducer:  (state, action) => newState//

//    Follows steps:

//   Check to see if the reducer cares about this action
//   If so, make a copy of the state, update the copy with new values, and return it

//   Otherwise, return the existing state unchanged


import * as Actions from "./actions";
import initialState from "../store/initialState";
export const UserReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case Actions.SIGN_UP:
            return {
                ...state,
                ...action.payload,
            };
        case Actions.SIGN_IN:
            return {
                ...state,
                ...action.payload,
            };
        case Actions.SIGN_OUT:
            return {
                ...state,
            };
        default:
            return state;
    }
};
