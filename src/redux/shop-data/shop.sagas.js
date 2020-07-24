import { call, put, takeLatest } from 'redux-saga/effects'
import { SHOPT_TYPE } from './shop.type'
import { firestore, convertCollectionsSnapShotToMap } from '../../components/firebase/firebase.config';
import { fetchCollectionSuccess, fetchCollectionFailuer } from './shop.action';


// here we are going to use 
// call method which is one of the effects method
// call method allow you to any call helper method
// in saga functions!

// put method is used to DISPATCH the action

// ASYNC
export function* fetchCollectionsAsync() {
    try {
        yield console.log("I AM FIRED");
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionsSnapShotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionMap));
    } catch(error) {
        yield put(fetchCollectionFailuer(error.message));
    }
}


export function* fetchCollectionsStart() {
    yield takeLatest(
        SHOPT_TYPE.FETCH_COLLECTION_START, 
        fetchCollectionsAsync
        );   
}