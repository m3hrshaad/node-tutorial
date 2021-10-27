const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {
  hightWaterMark: 90000,
  encoding: 'utf8'});

//default 64kb
//last buffer - reminder
//heightWaterMark - control size
// const stream = createReadStream('./content/big.txt', {heightWaterMark: 90000});
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8});

stream.on('data', (result)=>{
  console.log(result);
})
stream.on('error', (err)=> {
  console.log(result)
})