import { useState } from "react"
import { createContext } from "react";

export const ShoopingCartContext = createContext();

export const ShoopingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);  

    return (
        <ShoopingCartContext.Provider value={{
            count,setCount
        }}>
        { children }
        </ShoopingCartContext.Provider>
    )
}