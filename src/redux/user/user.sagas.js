import { takeLatest, call, all, put } from "redux-saga/effects";
import UserActionsType from "./user.types";
import { auth, googleProvider, makeUserRegisterDocument, getCurrentUser, } from "../../components/firebase/firebase.config";
import {  signInSucess, signInFailed, signOutFailed, signOutSucess, singUpFailed, signUpSucess  } from "./user.actions";




export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(makeUserRegisterDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        const data = yield userSnapshot.data();
        yield put(signInSucess({ id: userSnapshot.id, ...data }))
    } catch(e) {
        yield put(signInFailed(e.message))
    }
}

export function* onGoogleSigninStart() {
    yield takeLatest(UserActionsType.GOOGLE_SIGN_IN_START, signinWithGoogle);
}

export function* signinWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch(e) {
        yield put(signInFailed(e.message))
    }
}


export function* signinWithEmail({ payload: { email, password } }) {

    try {
        const { user } = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user);
    } catch(e) {
        yield put(signInFailed(e.message))
    }

}

export function* signinWithEmailStart() {
    yield takeLatest(UserActionsType.EMAIL_SIGN_IN_START, signinWithEmail);
}



export function* onCheckUserSession() {
    yield takeLatest(UserActionsType.CHECK_USER_SESSION, isUserAuthenticated);
}


export function* isUserAuthenticated() {
    try {
        const userAuth =  yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch(e) {
        signInFailed(e)
    }
}

export function* onsignOutStart() {
    yield takeLatest(UserActionsType.SIGN_OUT_START,signOut);
} 

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSucess())
    } catch(e) {
        yield put(signOutFailed(e.message))
    }
}

// for creating new user

export function* onSignUpStart() {
    yield takeLatest(UserActionsType.SIGN_UP_START, singUp)
}

export function* singUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSucess({ user, additionalData: { displayName }  }));
    } catch(e) { 
        yield put(singUpFailed(e.message))
     }
}

export function* onSingUpSucess() {
    yield takeLatest(UserActionsType.SIGN_UP_SUCESS, singInAfterSignUp)
}

export function* singInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* userSagas() {
    yield all([
        call(onGoogleSigninStart),
        call(signinWithEmailStart), 
        call(isUserAuthenticated),
        call(onsignOutStart),
        call(onSignUpStart),
        call(onSingUpSucess)
    ]);
}
 