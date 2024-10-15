import { createSlice } from "@reduxjs/toolkit";



const cartSlice= createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            state.cart= state.cart.filter(item => item.id !== action.payload)
        },
        emptycart:(state)=>{
            state.cart=[]
        }
    }
})

export const{addToCart,removeFromCart,emptycart}=cartSlice.actions
export default cartSlice.reducer