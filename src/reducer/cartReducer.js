export const cartReducer = (state,action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return[
                ...state,
                {
                    id: action.payload.id,
                    quantity: action.payload.quantity,
                    title: action.payload.title,
                    price: action.payload.price,
                    img: action.payload.img,
                }
            ];
        case 'ADD_QUANTITY':
            return []
        case 'REMOVE_QUANTITY':
            return []

        case 'REMOVE_FROM_CART':
            return state.fillter(product => product.id !== action.id);
        case 'EMPTY_CART':
            return [];
        default:
            return state;
    }
}