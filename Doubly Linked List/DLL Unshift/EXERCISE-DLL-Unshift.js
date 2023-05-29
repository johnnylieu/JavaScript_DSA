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
        if (this.length === 0) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    unshift(value) {
        // creating a new node with value the user provided
        const newNode = new Node(value);
        // if length is zero then head and tail will point to the new node that is added
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // using temp as a placeholder for the current head
            let temp = this.head;
            // setting current head to new node
            this.head = newNode;
            // making new node's next point to the node that used to be head
            newNode.next = temp;
            // pointing the old node's prev to the new node
            temp.prev = newNode;
        }
        this.length--;
        return value;
    }
}

function test() {
    let myDLL = new DoublyLinkedList(2);
    myDLL.push(3);

    console.log("Before unshift():");
    console.log("-----------------");
    myDLL.getHead();
    myDLL.getTail();
    myDLL.getLength();

    console.log("\nDoubly Linked List:");
    myDLL.printList();

    myDLL.unshift(1);

    console.log("\n\nAfter unshift():");
    console.log("----------------");
    myDLL.getHead();
    myDLL.getTail();
    myDLL.getLength();

    console.log("\nDoubly Linked List:");
    myDLL.printList();
}

test();

/*
    EXPECTED OUTPUT:

    Before unshift():
    -----------------
    Head: 2
    Tail: 3
    Length: 2

    Doubly Linked List:
    2
    3


    After unshift():
    ----------------
    Head: 1
    Tail: 3
    Length: 3

    Doubly Linked List:
    1
    2
    3

*/
