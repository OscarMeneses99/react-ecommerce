import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = (product) => {
  const { id, title, imageUrl, price, handleDelete } = product

  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className="w-6 h-6 text-gray-400 cursor-pointer" />
  }

  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center gap-3">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}

export default OrderCard
