import { useContext } from 'react'
import { ShoopingCartContext } from '../Context/Context'
import OrderCard from './OrderCard.jsx'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './OrderCard.jsx'
import '../App.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoopingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter((product) => product.id !== id)
        context.setCartProducts(filteredProducts)
        context.setCount(context.count - 1)
    }

    const renderCarts = () => {
        if (context.cartProducts.length === 0) {
            return (
                <div className='flex flex-col  justify-center items-center h-full gap-1'>
                    <p className='text-2xl font-light italic text-black/60'>Vacio</p>
                    <p className='text-2xl font-light italic text-black/60'>Agrega algo al carrito </p>
                </div>
            )
        }
        else {
            return (
                context.cartProducts.map((product) => (<OrderCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                />
                ))
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




