export const categoryReducer = (state,action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return[{
                category:action.payload
            }]
    
        default:
            return state;
    }
}