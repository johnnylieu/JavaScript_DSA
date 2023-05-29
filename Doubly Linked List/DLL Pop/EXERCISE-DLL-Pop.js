class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        // if list is empty, return undefined
        if (!this.head) {
            return undefined;
            // if list only has 1 one, we'll remove it, return it and set head and tail to null;
        } else if (this.length === 1) {
            let temp = this.tail;
            this.head = null;
            this.tail = null;
            // decrements and returns temp
            this.length--;
            return temp;
        } else {
            // sets a place holder for tail
            let temp = this.tail;
            // sets tail to the 2nd to the last node
            this.tail = this.tail.prev;
            // sets next to null cutting off the last node
            this.tail.next = null;
            // sets the last node's prev to null cutting it off
            temp.prev = null;
            // decrements and returns temp;
            this.length--;
            return temp;
        }
    }
}

function test() {
    let myDLL = new DoublyLinkedList(1);
    myDLL.push(2);

    // (2) Items in LL - Returns 2 Node
    if (myDLL.length !== 0) {
        console.log(myDLL.pop().value);
    } else {
        console.log("null");
    }

    // (1) Item in LL - Returns 1 Node
    if (myDLL.length !== 0) {
        console.log(myDLL.pop().value);
    } else {
        console.log("null");
    }

    // (0) Items in LL - Returns null
    if (myDLL.length !== 0) {
        console.log(myDLL.pop().value);
    } else {
        console.log("null");
    }
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    2
    1
    null

*/
