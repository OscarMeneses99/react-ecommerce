import { useContext } from 'react'
import { ShoopingCartContext } from '../Context/Context'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'




const Card = (data) => {

  const context = useContext(ShoopingCartContext)

  const showProductDetail = (productDetail) => {
    context.openProductDetail()
    context.closeCheckoutSideMenu()
    context.setProductShow(productDetail)
  }

  const addProductToCart = (productData) => {
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
          <CheckIcon className='h-6 w-6 text-green-500'></CheckIcon>
        </div>
      )
    } else {
      return (
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={() => addProductToCart(data.data)}>
          <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
        </div>
      )
    }
  }

  return (
    <div className='relative bg-white cursor-pointer w-46 h-50'>
      <figure className='relative mb-2 w-full h-4/5 '
        onClick={() => showProductDetail(data.data)}>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
        <p className='flex justify-between'>
          <span className='text-lg font-light'>{data.data.title}</span>
          <span className='text-lg font-medium'>${data.data.price}</span>
        </p>
      </figure>
      {renderIcon(data.data.id)}
    </div>
  )
}

export default Card

