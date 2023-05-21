import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoopingCartContext } from '../Context/Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { priceTotal } from '../utils/operations'
import OrderCard from './OrderCard.jsx'
import './OrderCard.jsx'
import '../App.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoopingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter((product) => product.id !== id)
        context.setCartProducts(filteredProducts)
        context.setCount(context.count - 1)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date(),
            products: context.cartProducts,
            totalproducts: context.cartProducts.length,
            totalPrice: priceTotal(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
    }
    const renderCarts = () => {
        if (context.cartProducts.length === 0) {
            return (
                <div className='flex flex-col justify-center items-center h-full gap-1'>
                    <p className='text-2xl font-light italic text-black/60'>Vacio</p>
                    <p className='text-2xl font-light italic text-black/60'>Agrega algo al carrito </p>
                </div>
            )
        }
        else {
            return (
                <>
                    {
                        context.cartProducts.map((product) => (<OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                        ))
                    }
                    <div className='flex text-right text-black/60 p-6'>
                        <span className='text-5sm font-light'>Total:</span>
                        <span className='text-5sm font-light'>${priceTotal(context.cartProducts)}</span>
                    </div>
                    <Link to='/my-orders/last'>
                        <button
                            className='bg-black text-white w-full p-4 my-2 font-medium rounded-lg'
                            onClick={() => handleCheckout()}
                        >
                            Checkout
                        </button>
                    </Link>
                </>

            )
        }
    }

    return (
        <aside className={`${context.isCheckoutSideMenuView ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-3'>
                <h2 className='text-xl font-medium'>My Order</h2>
                <div className='cursor-pointer' onClick={() => context.closeCheckoutSideMenu()}>
                    <XMarkIcon className="w-6 h-6 text-black cursor-pointer" />
                </div>
            </div>
            {renderCarts()}
        </aside>
    )
}

export default CheckoutSideMenu




