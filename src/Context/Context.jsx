import { useState, useEffect } from "react"
import { createContext } from "react";

export const ShoopingCartContext = createContext();

export const ShoopingCartProvider = ({ children }) => {

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

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
    const [productShow, setProductShow] = useState({});

    //Get Products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    //Get Products by Title
    const [searchByTitle, setSearchByTitle] = useState(null)

    //Get Products by Category
    const [searchByCategory, setSearchByCategory] = useState(null)

    //Filter Products
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item =>
            item.title.toLowerCase().includes(searchByTitle.toLowerCase())
        )
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item =>
            item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
        )
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item =>
                item.title.toLowerCase().includes(searchByTitle.toLowerCase())
            )
        }
        if (!searchType) {
            return items
        }
    }

    // Dentro del componente
    useEffect(() => {
        if (searchByTitle && searchByCategory) {
            setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        } else if (searchByTitle && !searchByCategory) {
            setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        } else if (!searchByTitle && searchByCategory) {
            setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        } else {
            setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
        }
    }, [items, searchByTitle, searchByCategory])

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
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoopingCartContext.Provider>
    )
}