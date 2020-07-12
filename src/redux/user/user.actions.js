import { SET_CURRENT_USER } from "../../Constants/redux/redux.constant";

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload:user
});