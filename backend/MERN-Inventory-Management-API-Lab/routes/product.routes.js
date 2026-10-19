const router = require('express').Router()
const products = require('../models/Product')


router.post('/', async (req, res) => {
  try {
    const createdProduct = await products.create(req.body);
    res.status(201).json(createdProduct);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})



router.get('/', async (req, res) => {
  try {
    const allProducts = await products.find();
    res.status(200).json(allProducts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


router.get('/:productsId', async (req, res) => {
  try {
    const foundProduct = await products.findById(req.params.productsId);
    if (!foundProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(foundProduct);
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid product ID' });
    }
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


router.put('/:productsId', async (req , res) => {
   try{ const updatedProduct = await products.findByIdAndUpdate(req.params.productsId, req.body, { new: true })
    res.json(updatedProduct)
} catch(err){console.log(err)}
})


router.delete('/:productsId' , async (req , res) => {
    try{
        const deletedProduct = await products.findByIdAndDelete(req.params.productsId)
        res.json(deletedProduct)
    } catch(err){console.log(err)}
})




module.exports = router