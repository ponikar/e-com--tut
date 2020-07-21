export  const addItemToCart= (cartItems, cartItemToAdd) => {
    // try to find the item in carts
    const ifItemExist = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(ifItemExist) {
        // if the item already exists
        // then increment the quanitity 
        // by 1
        return cartItems.map(cartItem => 
                cartItem.id === cartItemToAdd.id ? 
                // incrementing the quantity
                {...cartItem, quantity: cartItem.quantity + 1}
                // other wise return cartItem as it is
                : cartItem);
    }

    // if the item is new then add into array
    // with qauntity property
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const removeFromCart = (cartItems, cartItemRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItems
                    .filter(cartItem => cartItem.id !== cartItemRemove.id);
    }

    
    return cartItems.map(cartItem => 
        (cartItem.id === cartItemRemove.id) ?
        { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem);
}
