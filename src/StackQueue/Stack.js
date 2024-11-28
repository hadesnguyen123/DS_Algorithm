class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top
    }

    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            //like we prepend it in linked list
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
    }

    pop() {
        if (!this.top) {
            return null
        }
        if (this.top === this.bottom) {
            this.bottom = null
        }
        const holdingPointer = this.top
        this.top = this.top.next
        this.length--
        return holdingPointer
    }

    printArray() {
        let arr = []
        let current = this.top
        while (current !== null) {
            arr.push(current.value)
            current = current.next
        }
        return arr
    }

    //isEmpty
}

const myStack = new Stack();
myStack.peek()
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);

myStack.pop()

console.log(myStack.printArray())
console.log(myStack.top)

