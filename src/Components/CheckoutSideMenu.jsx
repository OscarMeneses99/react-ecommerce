import { useContext } from 'react'
import { ShoopingCartContext } from '../Context/Context'
import './OrderCard.jsx'
import '../App.css'
import OrderCard from './OrderCard.jsx'

const CheckoutSideMenu = () => {
    const { isCheckoutSideMenuView, closeCheckoutSideMenu, cartProducts } = useContext(ShoopingCartContext)

    return (
        <aside className={`${isCheckoutSideMenuView ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-3'>
                <h2 className='text-xl font-medium'>My Order</h2>
                <div className='cursor-pointer' onClick={() => closeCheckoutSideMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fill="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip="evenodd" />
                    </svg>
                </div>
            </div>
            {
                cartProducts.map((product) => (<OrderCard key={product.id} {...product} />))
            }
        </aside>
    )
}

export default CheckoutSideMenu




