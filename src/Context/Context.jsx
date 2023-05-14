import { useState } from "react"
import { createContext } from "react";

export const ShoopingCartContext = createContext();

export const ShoopingCartProvider = ({ children }) => {

    //ShoopingCart * Increment quantity
    const [count, setCount] = useState(0);

    //Product Detail * Open/Close
    const [isProductDetailView, setProductDetailView] = useState(false);
    const openProductDetail = () => setProductDetailView(true);
    const closeProductDetail = () => setProductDetailView(false);

    //Product Detail * Show Product
    const [productShow, setProductShow] = useState({
        title: "",
        price: "",
        description: "",
        category: {
            name: ""
        },
        images: [],
    });

    return (
        <ShoopingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailView,
            productShow,
            setProductShow
        }}>
            {children}
        </ShoopingCartContext.Provider>
    )
}