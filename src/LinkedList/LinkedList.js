// 12-10->5->16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }            
//     }
// }
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {  //first
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {   //adding to ending
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(value) { //adding to beginning
        const newNode = new Node(value)
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
        const newNode = new Node(value)
        //insert
        preNode.next = newNode
        newNode.next = afterNode
        this.length++
    }

    remove(index) {
        if (index >= this.length) {
            return
        } else if (index === 0) {
            return this.head = this.head.next
        }
        let leader = this.traversalToIndex(index - 1)
        let beDeleteNode = leader.next
        leader.next = beDeleteNode.next
        this.length--
    }

    reverse() {
        //check just 1 
        if (!this.head.next) {
            return this.head
        }
        let first = this.head
        let second = first.next 
        this.tail = this.head
        while(second){
            let temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(12)
myLinkedList.insert(1, 1)
myLinkedList.reverse()

console.log(myLinkedList.printList())
console.log(myLinkedList)