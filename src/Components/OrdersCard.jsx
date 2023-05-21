import { ChevronRightIcon } from '@heroicons/react/24/solid'
const OrdersCard = data => {
    const { date, totalPrice, totalProducts } = data

    return (
        <div className="flex justify-between items-center mb-3 border border-solid border-black rounded-lg p-4 w-80">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className="font-light">Date: {date}</span>
                    <span className="font-light">{totalProducts} Articles</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-medium text-2sm">Total: ${totalPrice}</span>
                    <ChevronRightIcon className="w-6 h-6 text-black cursor-pointer" />
                </p>
            </div>
        </div>
    )
}

export default OrdersCard
