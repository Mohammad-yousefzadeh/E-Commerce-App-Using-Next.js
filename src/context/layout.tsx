"use client"
import { ReactNode } from "react";
import Navbar from "../Components/Navbar";
import { AppContext, CartProducts } from "./AppContext";
import { IProduct } from "../app/product/[id]/IdProductPage";
import UseLocalStorage from "../LocalStorage/useLocalStorage";

interface IContextLayout{
    children : ReactNode
}

const ContextLayout = ({children} : IContextLayout) => {

    const [cartProducts , setCartProducts] = UseLocalStorage<CartProducts[]>('CartProducts' , [])

    const AddToCart = (data : IProduct) =>{
        setCartProducts(curritems =>{
            if(curritems.find(item => item.id === data.id ) == undefined){
                return [...curritems , {...data , quantity : 1}]
            }
            else{
                return curritems.map(item=>{
                    if(item.id === data.id){
                        return {...item , quantity : item.quantity + 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (data : CartProducts) =>{
        setCartProducts(items =>{
            if(items.find(item => item.id == data.id) != undefined){
                return items.filter(item => item.id !== data.id)
            }else{
                return items
            }
        })
    }

    const cartDecrement = (data : CartProducts) =>{
        setCartProducts(items =>{
            if(items.find(item => item.id == data.id) !== undefined){
                if(items.find(item => item.id == data.id)?.quantity == 1){
                    return items.filter(item => item.id !== data.id)
                }else{
                    return items.map(currentItem =>{
                        if(currentItem.id == data.id){
                            return {...currentItem , quantity : currentItem.quantity - 1}
                        }else{
                            return currentItem
                        }
                    })
                }
            }
            else{
                return items
            }
        })
    }

    const cartItemsQuantity = () =>{
        const result = cartProducts.map(item =>{
            return item.quantity
        })
        if(result.length === 0){
            return 0
        }
        else{
            return result.reduce((a , b)=>{
                return b + a
            })
        }
    }

    const cartTotalPrice = () =>{
        const result = cartProducts.map(item=>{
            return item.price * item.quantity
        })

        if(result.length == 0){
            return 0
        }else{
            return result.reduce((a , b)=> a + b)
        }
    }
    
    return (
        <>
            <AppContext value={{
                cartProducts , 
                AddToCart ,
                removeFromCart ,
                cartDecrement ,
                cartItemsQuantity ,
                cartTotalPrice
            }}>
                <Navbar />
                {children}
            </AppContext>
        </>
    );
}
 
export default ContextLayout;