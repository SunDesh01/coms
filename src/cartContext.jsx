import React, { createContext, useReducer } from 'react'


let CartReducer=(state,action)=>{
    switch(action.type){
        case 'addtocart': return{...state,cartItems:[...state.cartItems,action.payload]}
        case 'removefromcart': return{...state,cartItems:state.cartItems.filter((item)=>item.id !==action.payload.id)}
    }

}
const cartContext=createContext();

export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(CartReducer,{cartItems:[]});
    return(
        <cartContext.Provider value={{state,dispatch}}>
            {children}
            </cartContext.Provider>
    );
};

       


export default cartContext
