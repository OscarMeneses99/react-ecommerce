import { useState, useEffect } from "react"
import Layout from "../Components/Layout"
import Card from "../Components/Card"
import ProductDetail from "../Components/ProductDetail"
import CheckoutSideMenu from "../Components/CheckoutSideMenu"

const Home = () => {

  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(json => setItems(json))
  }, [])

  return (
    <Layout>
      <div className="grid gap-8 grid-cols-4 w-full max-w-screen-lg h-full">
        {
          items?.map((product) => (<Card key={product.id} {...product} />))
        }
      </div>
      <CheckoutSideMenu />
      <ProductDetail />
    </Layout>
  )
}

export default Home

