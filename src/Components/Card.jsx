import { useContext } from 'react'
import { ShoopingCartContext } from '../Context/Context'

const Card = (product) => {

    const { category, title, price, images, description } = product
    const { count, setCount, openProductDetail, closeProductDetail, setProductShow, cartProducts, setCartProducts, openCheckoutSideMenu, closeCheckoutSideMenu } = useContext(ShoopingCartContext)

    const showProductDetail = (productDetail) => {
        openProductDetail()
        closeCheckoutSideMenu()
        setProductShow(productDetail)
    }

    const addProductToCart = (productData) => {
        setCount(count + 1)
        setCartProducts([...cartProducts, productData])
        openCheckoutSideMenu()
        closeProductDetail()
    }

    return (
        <div
            className='relative bg-white cursor-pointer w-46 h-50'>
            <figure className='relative mb-2 w-full h-4/5 '
                onClick={() => showProductDetail({ title, price, description, category, images })}>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={images[1]} alt={title} />
                <p className='flex justify-between'>
                    <span className='text-lg font-light'>{title}</span>
                    <span className='text-lg font-medium'>${price}</span>
                </p>
            </figure>
            <button className='absolute top-0 right-0 flex justify-center items-center bg-white w-7 h-7 rounded-full m-2 p-1'
                onClick={() => addProductToCart({ title, price, description, category, images })}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    )
}

export default Card

