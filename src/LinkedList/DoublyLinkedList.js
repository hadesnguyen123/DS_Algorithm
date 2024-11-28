// 12-10->5->16

class NodeL {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {  //first
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {   //adding to ending
        const newNode = new NodeL(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(value) { //adding to beginning
        const newNode = new NodeL(value)
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    traversalToIndex(index) {
        let counter = 0
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        } else if (index === 0) {
            return this.prepend(value)
        }
        let preNode = this.traversalToIndex(index - 1)   //leader
        let afterNode = preNode.next  //holding pointer
        const newNode = new NodeL(value)
        //insert
        preNode.next = newNode
        newNode.prev = preNode
        newNode.next = afterNode
        afterNode.prev = newNode
        this.length++
    }

    remove(index) {
        if (index >= this.length) {
            return
        } else if (index === 0) {
            return this.head = this.head.next
        }
        let preNode = this.traversalToIndex(index - 1)
        let beDeleteNode = leader.next
        preNode.next = beDeleteNode.next
        this.length--
    }
}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(12)
myLinkedList.insert(1, 1)

console.log(myLinkedList.printList())
console.log(myLinkedList)