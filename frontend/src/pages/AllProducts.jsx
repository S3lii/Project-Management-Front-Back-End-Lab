import { useState, useEffect } from 'react'
import { fetchAllProducts } from '../services/productService'
import { Link } from 'react-router'

function AllProducts() {
  const [products, setProducts] = useState([])

  async function getAllProducts() {
    const response = await fetchAllProducts()
    setProducts(response)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div>
      <h1>All Products</h1>

      {products.map((oneProduct) => (
        <div key={oneProduct._id}>
          <h2>Title: {oneProduct.title}</h2>
          <p>
            <Link to={`/products/${oneProduct._id}`}>See Product Details</Link>
          </p>
        </div>
      ))}
    </div>
  )
}

export default AllProducts
