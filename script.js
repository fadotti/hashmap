import { HashMap } from "./main.js";

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.dir(test, {depth: null})

test.set('grape', 'violet')
console.dir(test, {depth: null})
console.log(test.length())

test.set('moon', 'silver')
console.dir(test, {depth: null})
console.log(test.get('moon'))
console.log(test.has('ice cream'))
console.log(test.keys())
console.log(test.values())
console.log(test.entries())
console.log(test.clear())
console.dir(test, {depth: null})