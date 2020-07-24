import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionsType from "../user/user.types";
import { clearCart } from "./cart.actions";





export function* onSignOutSuccess() {
    yield takeLatest(UserActionsType.SIGN_OUT_SUCCESS, clearingCart);
}

export function* clearingCart() {
    // dispatch the action 
    yield put(clearCart());

}

export function* rootCart() {
    yield all([call(onSignOutSuccess)])
}