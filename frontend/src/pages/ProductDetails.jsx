import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { fetchOneProduct, deleteProduct } from '../services/productService'

function ProductDetails() {
  const [product, setProduct] = useState(null)
  const { productId } = useParams()
  const navigate = useNavigate()

  async function getProduct() {
    const response = await fetchOneProduct(productId)
    setProduct(response)
  }

  async function handleDelete() {
    await deleteProduct(productId)
    navigate('/products')
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div>
      <h1>Product Details</h1>

      {product ? (
        <>
          <h2>Title: {product.title}</h2>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <button onClick={handleDelete}>Delete Product</button>
          <p>
            <Link to={`/products/${product._id}/edit`}>Update Product</Link>
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ProductDetails
