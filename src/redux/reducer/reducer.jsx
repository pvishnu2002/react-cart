const intialState = {
    carts: []
};
export const cartreducer = (state = intialState, action) => {
    switch (action.type) {
        case "ADD_CART":

            // for increasing item quantity
            const iteamIndex = state.carts.findIndex((item) => item.id === action.payload.id)
            if (iteamIndex >= 0) {
                state.carts[iteamIndex].qnty += 1;
            } else {
                const temp = { ...action.payload, qnty: 1 }

                return {
                    ...state,
                    carts: [...state.carts, temp]

                }
            }
        case "REMOVE_CART":
            const data = state.carts.filter((ele) => ele.id !== action.payload)
            return {
                ...state,
                carts: data
            }

        case "RMV_ONE":
            const iteamIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id)
            if (state.carts[iteamIndex_dec].qnty >= 1) {
                const dltitem = state.carts[iteamIndex_dec].qnty -= 1
                console.log(...state.carts, dltitem);

                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[iteamIndex_dec].qnty == 1) {
                //if item == 1 and click decrement button than item is removed from itemdetails page
                const data = state.carts.filter((ele) => ele.id !== action.payload.id)
                return {
                    ...state,
                    carts: data
                }
            }


        default:
            return state

    }
}