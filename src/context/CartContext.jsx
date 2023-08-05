import { createContext } from "react";
import productData from "components/Main/Cart/productData.json";
import { useState } from "react";



export const CartContext = createContext()

export function CartContextProvider({children}) {
    const [products, setProducts] = useState(productData.data);

    const totalAmount = products.reduce((accumulator, currentValue) => 
    accumulator.quantity * accumulator.price + currentValue.quantity * currentValue.price
    )

    return (
        <CartContext.Provider value={{products, setProducts, totalAmount}}>
            {children}
        </CartContext.Provider>
    )
}