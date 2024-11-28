class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.arr = []
    }
    peek() {
        return this.arr[this.arr.length - 1]
    }

    push(value) {
        this.arr.push(value)
        return this
    }

    pop() {
        this.arr.pop()
        return this
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

