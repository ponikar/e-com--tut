import CartType from "./cart.type";


export const toggleCardHidden = () => ({
    type:CartType.SET_TOGGLE_HIDDEN
})

export const addItem = item => ({
    type:CartType.ADD_TO_CART,
    payload:item
})