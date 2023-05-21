import { useState } from "react"
import { createContext } from "react";

export const ShoopingCartContext = createContext();

export const ShoopingCartProvider = ({ children }) => {

    //ShoopingCart * Increment quantity
    const [count, setCount] = useState(0);

    //ShoopingCart * Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Shooping Card * Order
    const [order, setOrder] = useState([])

    //Product Detail * Open/Close
    const [isProductDetailView, setProductDetailView] = useState(false);
    const openProductDetail = () => setProductDetailView(true);
    const closeProductDetail = () => setProductDetailView(false);

    //Checkout Side Menu * Open/Close
    const [isCheckoutSideMenuView, setCheckoutSideMenuView] = useState(false);
    const openCheckoutSideMenu = () => setCheckoutSideMenuView(true);
    const closeCheckoutSideMenu = () => setCheckoutSideMenuView(false);

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
            setProductShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuView,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoopingCartContext.Provider>
    )
}