const {john, peter} = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
console.log(data)
sayHi('Ona')
sayHi(john)
sayHi(peter)
require('./7-mind-grenade')