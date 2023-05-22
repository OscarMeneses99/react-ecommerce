import Layout from "../Components/Layout"
import Card from "../Components/Card"
import ProductDetail from "../Components/ProductDetail"
import CheckoutSideMenu from "../Components/CheckoutSideMenu"
import { ShoopingCartContext } from "../Context/Context"
import { useContext } from "react"

const Home = () => {
  const context = useContext(ShoopingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        <div className="grid gap-8 grid-cols-4 w-full max-w-screen-lg h-full">
          {

            context.filteredItems?.map(item => (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
      )
    } else {
      return (
        <div className="flex justify-center items-center m-40">
          <h1 className='text-black/60 italic'>No product found</h1>
        </div>
      )
    }
  }

  return (

    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-4">
        <h1 className="font-medium text-3xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-3 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
      {renderView()}
      <CheckoutSideMenu />
      <ProductDetail />

    </Layout >

  )
}

export default Home

