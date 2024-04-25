

const reducer = (state,action) => {
    if(action.type === 'CLEAR_CART') {
        return { ...state,cart: [] }
    }

    if(action.type === 'REMOVE') {
        return {...state, cart: state.cart.filter((cartItem)=> cartItem.id !== action.payload)}
    }

    if(action.type === 'INCREASE') {
        let tempCart = state.cart.map((cartItem)=>{
            if(cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem
        })
        return { ...state, cart: tempCart }
    }

    if(action.type === 'DECREASE') {
        let tempCart = state.cart.map((cartItem)=>{
            if(cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem
        }).filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: tempCart }
    }

    if(action.type === 'GET_TOTAL') {
        let totl = 0
        let amnt = 0
        state.cart.map((cartItem) => {
            totl += (cartItem.amount * cartItem.price)
            amnt += (cartItem.amount)
        })
        totl = parseFloat(totl.toFixed(2))
        return { ...state, total: totl, amount: amnt }
    }

    if(action.type === 'LOADING') {
        return {...state, loading:true}
    }

    if(action.type === 'DISPLAY_ITEMS') {
        return { ...state, cart:action.payload, loading: false}
    }

    return state
}

export default reducer