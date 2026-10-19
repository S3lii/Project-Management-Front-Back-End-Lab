import axios from "axios"

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"

async function fetchAllProducts() {
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data
}

async function fetchOneProduct(productId) {
    const response = await axios.get(`${BASE_URL}/products/${productId}`)
    return response.data
}

async function createNewProduct(newProductBody) {
    const response = await axios.post(`${BASE_URL}/products`, newProductBody)
    return response.data
}

async function updateProduct(productId, updatedProductBody) {
    const response = await axios.put(`${BASE_URL}/products/${productId}`, updatedProductBody)
    return response.data
}

async function deleteProduct(productId) {
    const response = await axios.delete(`${BASE_URL}/products/${productId}`)
    return response.data
}

export {
    fetchAllProducts,
    fetchOneProduct,
    createNewProduct,
    updateProduct,
    deleteProduct
}
