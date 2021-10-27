const express = require('express');
const app = express();
//read products from data
const {products} = require('./data')

app.get('/', (req, res)=>{
  res.send('<h1> Home Page </h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res)=>{
  const newProducts = products.map((product)=> {
  const {id, name, image} = product;
  return {id, name, image}
  })
  res.json(newProducts)
})

// get all product by id 
app.get('/api/products/:productID', (req, res)=>{
  // console.log(req)
  // console.log(req.params)
  const {productID} = req.params;

  const singleProduct = products.find((product)=> product.id === Number(productID))
  if(!singleProduct){
    return res.status(404).send('Product Does Not Exist')
  }
  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
  console.log(req.params)
  res.send('hello world');
})

// match product or dosent match product
app.get('/api/v1/query', (req, res)=>{
  // console.log(req.query)
  const {search, limit} = req.query
  let sortProducts = [...products]

  if(search){
    sortProducts = sortProducts.filter((product)=>{
      return product.name.startsWith(search)
    })
  }
  if(limit){
    sortProducts = sortProducts.slice(0, Number(limit))
  }
  if(sortProducts.length < 1){
    // res.status(200).send('no product matches your search')
    return res.status(200).json({success:true, data:[]})
  }
  res.status(200).json(sortProducts)
})

app.listen(5000, ()=>{
  console.log('server is listening on port 5000');
})

