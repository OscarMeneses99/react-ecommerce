import { useState, useEffect } from "react"
import Layout from "../Components/Layout"
import Card from "../Components/Card"
import ProductDetail from "../Components/ProductDetail"

const Home = () => {

  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(json => setItems(json))
  }, [])

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map((product) => (<Card key={product.id} {...product} />))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home

