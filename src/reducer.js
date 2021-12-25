export const initialState = {
    basket: [],
    user: null
};


export const getBasketTotal = (basket) => {
    basket?.reducer((amount,item) => item.price +amount,0);
};

function reducer(state, action) {
   
    switch(action.type) {
        case "SET_USER":

            return {
                ...state,
                user:action.user,
            }
            break;
        case 'ADD_TO_BASKET':
            //Logic for addding item to basket
        return {
            ...state,
            basket:[...state.basket,action.item]
        };
        break;
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from basket..

            //we cloned the basket
            let newBasket =[...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if(index >= 0) {
                //item exists in the basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remoce product (id: ${action.id}) as its not in basket`
                );
            }
            
            return {
                ...state,
                basket:newBasket,
            };
        break;
        default:
            return state;
    }
}

export default reducer;
/*

*/