import { call, all } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop-data/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { rootCart } from "./cart/cart.sagas";




// root of all the saga

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSagas),
        call(rootCart)
    ]);
} 