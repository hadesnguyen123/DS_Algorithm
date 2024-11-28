class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {    //O(logN)
        const newNode = new Node(value)
        if (this.root === null) {  // check null, empty
            this.root = newNode
            return
        } else {
            let currentNode = this.root //pointer
            while (true) {
                if (value < currentNode.value) {
                    //left
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    //right
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

    lookup(value) {  // O(logN)
        if (!this.root) {
            return false
        }
        let currentNode = this.root
        while (currentNode) {
            if (value < currentNode.value) {
                //left
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                //right
                currentNode = currentNode.right
            } else {  //found it
                return currentNode
            }
            return false
        }
    }


    remove(value) {
        if (!this.root) {
            return false
        }

        let currentNode = this.root
        let parentNode = null
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.right
            } else if (currentNode.value === value) {
                //match it, get to work
                //option 1: No right child
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left
                    } else {
                        //if parent > current value, make current left child a left child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left
                        }
                        //if parent < current valule, make current left child a right child of parent
                        if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left
                        }
                    }
                    //option 2: Right child which doesnt have a left child (have right child)
                } else if (currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left
                    } else {
                        currentNode.right. 
                        if(currentNode.value < parentNode)
                    }
                    //Option 3: Right child that has a left child
                } else if (currentNode.right) {

                }
            }
        }
    }


}

//        9
//   4         20
// 1   6    15    70
const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)))
console.log(tree.lookup(9))

function traverse(node) {
    const tree = { value: node.value }
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
}


