import { useContext } from "react"
import { ShoopingCartContext } from "../Context/Context"
import Layout from "../Components/Layout"
import OrderCard from "../Components/OrderCard"



const MyOrder = () => {
  const context = useContext(ShoopingCartContext)
  return (
    <Layout>
      <h1>My Order</h1>
      <div className='flex flex-col w-80'>
      {
        context.order?.slice(-1)[0].products.map(product => (<OrderCard
          key={product.id}
          id={product.id}
          title={product.title}
          imageUrl={product.images}
          price={product.price}
        />
        ))
      }
      </div>
    </Layout>
  )
}

export default MyOrder
