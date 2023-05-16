import { useContext } from 'react'
import { ShoopingCartContext } from '../Context/Context'
import '../App.css'

const ProductDetail = () => {
    const { isProductDetailView, closeProductDetail, productShow } = useContext(ShoopingCartContext)

    return (
        <aside className={`${isProductDetailView ? 'flex' : 'hidden'} product-detail scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-3'>
                <h2 className='text-xl font-medium'>Product Detail</h2>
                <div className='cursor-pointer' onClick={() => closeProductDetail()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fill="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip="evenodd" />
                    </svg>
                </div>
            </div>
            <figure className='px-10 py-0'>
                <img className='w-full h-full object-cover rounded-lg' src={productShow.images[1]} alt={productShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='text-2xl font-medium mb-1'>{productShow.title}</span>
                <span className='text-md font-medium'>${productShow.price}</span>
                <span className='text-sm font-light'>-{productShow.description}</span>

            </p>
        </aside>
    )
}

export default ProductDetail




