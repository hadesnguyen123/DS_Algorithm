class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) { // _ mean it's private     //has map
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash    //we got address is 23 if key is grapes
        //alway make sure hash < data.length
    }

    set(key, value) {
        let address = this._hash(key)
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])
        // what happen when collsion - handle colision
        return this.data[address]
    } //O(1)

    get(key) {
        let address = this._hash(key)
        const currentBucket = this.data[address]
        if (currentBucket) {  //we can have multiple item
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) return currentBucket[i][1]
            }
        }  //O(1)
        return 'Undefined'
    }

    keys() {
        let keysArray = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])  //hãy tưởng tượng như mảng chiều
            }
        }
        return keysArray
    }
}

const myHashTable = new HashTable(50)
console.log(myHashTable._hash('grapes'))
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 500)
console.log(myHashTable.get('grapes'))
console.log(myHashTable.keys())
