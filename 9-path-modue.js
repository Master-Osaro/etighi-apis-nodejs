const path = require('path')

console.log(path.sep)

const filepath = path.join('/content', 'subfolder', 'test.txt');
console.log(filepath)

//base
const base = path.basename(filepath);
console.log(base)

//path resolve absolute
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);