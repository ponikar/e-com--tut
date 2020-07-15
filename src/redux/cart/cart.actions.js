import CartType from "./cart.type";


export const toggleCardHidden = () => ({
    type:CartType.SET_TOGGLE_HIDDEN
})

export const addItem = item => ({
    type:CartType.ADD_TO_CART,
    payload:item
})

export const clearItemFromCart = item => ({
    type: CartType.CLEART_ITEM_FROM_CART,
    payload:item
});


export const removeItem = item => ({
    type: CartType.REMOVE_ITEM,
    payload:item
})