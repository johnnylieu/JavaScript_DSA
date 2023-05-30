class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    printQueue() {
        let temp = this.first;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getFirst() {
        if (this.first === null) {
            console.log("First: null");
        } else {
            console.log("First: " + this.first.value);
        }
    }

    getLast() {
        if (this.last === null) {
            console.log("Last: null");
        } else {
            console.log("Last: " + this.last.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        // creates new node with vlaue provided by user
        const newNode = new Node(value);
        // edge case if queue is empty
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // last node will point to the new node
            this.last.next = newNode;
            // new node becomes last node
            this.last = newNode;
        }
        this.length++;
        return this;
    }
}

function test() {
    let myQueue = new Queue(2);

    console.log("Before enqueue():");
    console.log("--------------");
    myQueue.getFirst();
    myQueue.getLast();
    myQueue.getLength();

    console.log("\nQueue:");
    myQueue.printQueue();

    myQueue.enqueue(1);

    console.log("\n\nAfter enqueue():");
    console.log("-------------");
    myQueue.getFirst();
    myQueue.getLast();
    myQueue.getLength();

    console.log("\nQueue:");
    myQueue.printQueue();
}

test();

/*
    EXPECTED OUTPUT:

    Before enqueue():
    --------------
    First: 2
    Last: 2
    Length: 1

    Queue:
    2


    After enqueue():
    -------------
    First: 2
    Last: 1
    Length: 2

    Queue:
    2
    1

*/