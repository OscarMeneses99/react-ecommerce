import { useContext } from 'react'
import { ShoopingCartContext } from '../Context/Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import '../App.css'

const ProductDetail = () => {
    const context = useContext(ShoopingCartContext)

    const addProductToCart = () => {
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, context.productShow])
    }
    const renderButton = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
    
        if (isInCart) {
          return (
            <button className='bg-black/30 text-white w-full p-4 font-medium cursor-not-allowed'>
                Agregar al carrito
            </button>
          )
        } else {
          return (
            <button className='bg-black text-white w-full p-4 font-medium'
                onClick={() => addProductToCart()}>
                Agregar al carrito
            </button>
          )
        }
      }

    return (
        <aside className={`${context.isProductDetailView ? 'flex' : 'hidden'} product-detail scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-3'>
                <h2 className='text-xl font-medium'>Product Detail</h2>
                <div className='cursor-pointer' onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className="w-6 h-6 text-black cursor-pointer" />
                </div>
            </div>
            <figure className='px-10 py-0'>
                <img className='w-full h-full object-cover rounded-lg' src={context.productShow.images} alt={context.productShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='text-2xl font-medium mb-1'>{context.productShow.title}</span>
                <span className='text-md font-medium'>${context.productShow.price}</span>
                <span className='text-sm font-light text-justify'>{context.productShow.description}</span>
            </p>
            {renderButton(context.productShow.id)}
        </aside>
    )
}

export default ProductDetail




