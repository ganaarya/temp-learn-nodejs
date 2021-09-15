const {createReadStream} = require('fs');

// const stream = createReadStream('./content/big.txt',{
//   highWaterMark:90000,
//   encoding:'utf8'
// });

const stream = createReadStream('../content/big.txt',{
  highWaterMark:90000,
  encoding:'utf8'
}); // Wrong directory to test stream 'error' event

// default size of the buffer is 64 KB
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt',{highWaterMark: 90000})
// const stream = createReadStream('./content/big.txt's,{encoding: 'utf8'})

stream.on('data',(output) => {
  console.log(output)
})

stream.on('error',(err) => {
  console.log(err)
})