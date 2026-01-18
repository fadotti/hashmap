class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    const emptyArray = new Array(this.capacity);
    for (let i = 0; i < emptyArray.length; i++) {
      emptyArray[i] = [];
    }
    this.bucketList = emptyArray;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  // hash(key) {
  //   let hashCode = 0;

  //   const primeNumber = 31;
  //   for (let i = 0; i < key.length; i++) {
  //     hashCode = primeNumber * hashCode + key.charCodeAt(i);
  //   }

  //   return hashCode;
  // } 

  
  get(key) {
    let output = null;
    this.bucketList.forEach((bucket) => {
      bucket.forEach((object) => {
        if (typeof object[key] != 'undefined') {
          output = object[key];
        }
      })
    })
    return output
  }

  has(key) {
    let output = false;
    const hashCode = this.hash(key);

    if (hashCode < 0 || hashCode >= this.bucketList.length) {
      throw new Error("Trying to access index out of bounds");
    }

    this.bucketList[hashCode].forEach((object) => {
      if (typeof object[key] != 'undefined') output = true;
    })
    return output
  }

  remove(key) {
    let output = false;
    const hashCode = this.hash(key);

    if (hashCode < 0 || hashCode >= this.bucketList.length) {
      throw new Error("Trying to access index out of bounds");
    }

    this.bucketList[hashCode].forEach((object, index, array) => {
      if (typeof object[key] != 'undefined') {
        output = true;
        array.splice(index, 1);
      }
    })
    return output
  }

  length() {
    let output = 0;
    this.bucketList.forEach((bucket) => {
      output += bucket.length;
    })
    return output
  }

  set(key, value) {
    const hashCode = this.hash(key);

    if (hashCode < 0 || hashCode >= this.bucketList.length) {
      throw new Error("Trying to access index out of bounds");
    }

    this.bucketList[hashCode].push({[key]: value});
  }
}

const test = new HashMap()
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
console.log(test.has('lion'))
console.log(test.length())
console.log(test.remove('dog'))
console.log(test.length())
console.dir(test, {depth: null})