//Example 1

const {readFile, writeFile} = require('fs');

console.log('started a first task')

readFile('./content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err)
        return
    }

    console.log(result);
    console.log('completed first task');

});

console.log('starting next task');


//Example 2 - Starting ops system process
console.log('first');
setTimeout(()=>{
    console.log('second')
}, 0)
console.log('third')

//Example 3 - Starting ops system process
setInterval(()=>{
    console.log('Hello World')
}, 2000)
console.log('I will run first')