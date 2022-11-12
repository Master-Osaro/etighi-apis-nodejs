// const {writeFileSync} = require('fs')
// for (let index = 0; index < 1000; index++) {
//     writeFileSync('./content/big.txt', `hello world ${index}\n`, {flag: 'a'})
// }

const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt');
stream.on('data', (result)=>{
    console.log(result)
})