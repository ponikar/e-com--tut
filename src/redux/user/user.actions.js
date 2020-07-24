import UserActionsType from "./user.types";





export const googleSignInStart = () => ({
    type:UserActionsType.GOOGLE_SIGN_IN_START
});


export const emailSignInStart = emailAndPassword => ({
    type:UserActionsType.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
});

export const signInSucess = user => ({
    type:UserActionsType.SIGN_IN_SUCCESS,
    payload:user
});

export const signInFailed = erroMessage => ({
    type:UserActionsType.SIGN_IN_FAILED,
    payload: erroMessage
});

export const checkUserSession = () => ({
    type:UserActionsType.CHECK_USER_SESSION
});

export const signOutSucess = () => ({
    type:UserActionsType.SIGN_OUT_SUCCESS
});

export const signOutFailed = error => ({
    type:UserActionsType.SIGN_OUT_FAILED,
    payload:error
});

export const signOutStart = () => ({
    type:UserActionsType.SIGN_OUT_START
});

export const singUpStart = userParams => ({
    type:UserActionsType.SIGN_UP_START,
    payload:userParams
});

export const signUpSucess = ({ user, additionalData }) => ({
    type:UserActionsType.SIGN_UP_SUCESS,
    payload:{ user, additionalData }
});

export const singUpFailed = error => ({
    type:UserActionsType.SIGN_UP_FAILED,
    payload:error
});