const express = require('express');
const router = express.Router();

//post method or write data
router.post('/', (req, res)=>{
  const {name} = req.body;
  if(name){
    return res.status(200).send(`Welcome ${name}`)
  }
    return res.status(401).send('Please Provide Credentials')
})

module.exports = router
