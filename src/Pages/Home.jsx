import { useState, useEffect } from "react"
import Layout from "../Components/Layout"
import Card from "../Components/Card"

const Home = () => {

  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(json => setItems(json))
  }, [])

  return (
    <Layout>
      <h1>Home</h1>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map((product) => (<Card key={product.id} {...product} />))
        }
      </div>
    </Layout>
  )
}

export default Home

