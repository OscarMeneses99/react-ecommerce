import Layout from "../Components/Layout"
import OrdersCard from "../Components/OrdersCard"
import { useContext } from "react"
import { ShoopingCartContext } from "../Context/Context"
import { Link } from "react-router-dom"
const MyOrders = () => {
  const context = useContext(ShoopingCartContext)
  console.log(context.order)
  return (
    <Layout>
      <h1 className="text-2xl font-medium">My Orders</h1>
      <div className="flex flex-col items-center gap-4 m-6">
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`} >
              <OrdersCard
                date={order.date}
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts} />
            </Link>
          ))
        }
      </div>
    </Layout >
  )
}

export default MyOrders
