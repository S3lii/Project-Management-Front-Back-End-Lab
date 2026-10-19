import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import AllProducts from './pages/AllProducts'
import CreateProduct from './pages/CreateProduct'
import ProductDetails from './pages/ProductDetails'
import EditProduct from './pages/EditProduct'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/products/:productId/edit" element={<EditProduct />} />
      </Routes>
    </div>
  )
}

export default App
