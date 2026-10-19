import { useState } from 'react'
import { useNavigate } from 'react-router'
import { createNewProduct } from '../services/productService'

function CreateProduct() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'electronics',
    price: '',
    quantity: ''
  })

  const navigate = useNavigate()

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    await createNewProduct(formData)
    navigate('/products')
  }

  return (
    <div>
      <h1>Create Product</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={formData.title}
        />
        <br />

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
          value={formData.description}
        />
        <br />

        <label htmlFor="category">Category: </label>
        <select
          name="category"
          id="category"
          onChange={handleChange}
          value={formData.category}
        >
          <option value="electronics">electronics</option>
          <option value="food">food</option>
          <option value="clothing">clothing</option>
          <option value="furniture">furniture</option>
          <option value="other">other</option>
        </select>
        <br />

        <label htmlFor="price">Price: </label>
        <input
          type="number"
          step="any"
          name="price"
          id="price"
          onChange={handleChange}
          value={formData.price}
        />
        <br />

        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          onChange={handleChange}
          value={formData.quantity}
        />
        <br />

        <button>Create Product</button>
      </form>
    </div>
  )
}

export default CreateProduct
