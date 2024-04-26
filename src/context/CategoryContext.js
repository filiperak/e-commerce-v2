import { createContext, useReducer } from "react";
import { categoryReducer } from "../reducer/categoryReducer";

export const CategoryContext = createContext()
export const CategoryContextProvider = ({children}) => {
    const [categoryState,categoryDispatch] = useReducer(categoryReducer,[])
    return <CategoryContext.Provider value={{categoryState,categoryDispatch}}>
        {children}
    </CategoryContext.Provider>
}