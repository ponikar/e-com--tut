import { SHOPT_TYPE } from "./shop.type";
import { firestore, convertCollectionsSnapShotToMap } from "../../components/firebase/firebase.config";


export const fetchCollectionStart = () => ({
    type: SHOPT_TYPE.FETCH_COLLECTION_START
});


export const fetchCollectionSuccess = collectionMap => ({
    type:SHOPT_TYPE.FETCH_COLLECTION_SUCEESS,
    payload:collectionMap
})

export const fetchCollectionFailuer = errorMessage => ({
    type:SHOPT_TYPE.FETCH_COLLECTION_FAILURE,
    payload:errorMessage
});

export const fetchCollectionStartAsycn = () => dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());


    collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
    })
        .catch(err => dispatch(fetchCollectionFailuer(err.message)))
}