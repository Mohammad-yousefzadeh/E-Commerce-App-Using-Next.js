import { createContext } from "react";
import { IProduct } from "../app/product/[id]/IdProductPage";

export type CartProducts = { 
    quantity : number
} & IProduct

interface IContext {
    cartProducts : CartProducts[] 
    AddToCart : (data : IProduct)=> void
    removeFromCart : (data : CartProducts) => void
    cartDecrement : (data : CartProducts) => void
    cartItemsQuantity : () => number
    cartTotalPrice : () => number
}

export const AppContext = createContext({} as IContext)