import { SHOPT_TYPE } from "./shop.type";


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
