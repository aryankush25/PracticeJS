class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);

    if (!this.data[address]) {
      return undefined;
    }

    const [, value] = this.data[address].find(([k, v]) => k === key);

    return value;
  }

  keys() {
    const keys = [];

    this.data.forEach((data) => {
      if (data && Array.isArray(data)) {
        data.forEach(([key, value]) => {
          keys.push(key);
        });
      }
    });

    return keys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
console.log(myHashTable.get("apples"));
console.log(myHashTable.keys());
