export { HashMap }

class HashMap {
  #initialCapacity = 16;

  constructor() {
    this.loadFactor = 0.75;
    this.capacity = this.#initialCapacity;
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

  clear() {
    this.bucketList.forEach((bucket, index, linkedList) => {
      linkedList[index] = [];
    })
  }

  keys() {
    let output = [];
    this.bucketList.forEach((bucket) => {
      if (bucket.length > 0) {
        bucket.forEach((pair) => {
          output = [...output, ...Object.keys(pair)];
        })
      }
    })
    return output
  }

  values() {
    let output = [];
    this.bucketList.forEach((bucket) => {
      if (bucket.length > 0) {
        bucket.forEach((pair) => {
          output = [...output, ...Object.values(pair)];
        })
      }
    })
    return output
  }

  entries() {
    let keys = this.keys();
    let values = this.values();
    let output = [];
    for (let i = 0; i < keys.length; i++) {
      output.push([keys[i], values[i]]);
    }
    return output
  }

  set(key, value) {
    if ((this.length() >= this.capacity * this.loadFactor) && (!this.has(key))) {
      this.capacity += this.#initialCapacity;
    }

    const hashCode = this.hash(key);

    if (hashCode < 0 || hashCode >= this.bucketList.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!this.has(key)) {
      this.bucketList[hashCode].push({[key]: value});
    } else {
      this.remove(key);
      this.bucketList[hashCode].push({[key]: value});
    }
  }
}