class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItem(index)
        return item
    }

    shiftItem(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length-1]
    }
}

const newArray = new MyArray()
// newArray.data = { red: 1, blue: 2, black: 3 }
newArray.push('hi')
newArray.push('you')
newArray.push('!')
// newArray.pop()
newArray.delete(1)

console.log(newArray)