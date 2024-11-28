//?? Tại sao không implement queue bằng array
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        return this.first
    }

    enqueue(value) {
        const newNode = new Node(value)
        newNode.next
        //Check đã có phần tử nào trong queue hay chưa
        if (this.length == 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
    }
    /// queue : last <-- item <--item <-- item <-- first
    dequeue() {
        if(!this.first){
            return null
        }
        if(this.first === this.last) {
            this.last = null
        }
        let holdingPointer = this.first
        this.first = this.first.next
        this.length--
        return holdingPointer
    }
    //isEmpty
}

const myQueue = new Queue
myQueue.enqueue(1)
myQueue.enqueue('Nguyen')
myQueue.enqueue('Hoang')

myQueue.peek()
console.log(myQueue)
console.log(myQueue.dequeue().value)