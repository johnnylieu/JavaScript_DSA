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
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    dequeue() {
        // placeholder for the first node that we'll be removing
        let temp = this.first;
        // edge case if queue is empty
        if (!this.first) {
            return undefined;
            // edge case if queue has only 1 node
        } else if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            // fsecond node is not first node
            this.first = this.first.next;
            // first node is now removed because it's next property is null
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}

function test() {
    let myQueue = new Queue(2);
    myQueue.enqueue(1);

    // (2) Items - Returns 2 Node
    if (myQueue.length !== 0) {
        console.log(myQueue.dequeue().value);
    } else {
        console.log("undefined");
    }

    // (1) Item - Returns 1 Node
    if (myQueue.length !== 0) {
        console.log(myQueue.dequeue().value);
    } else {
        console.log("undefined");
    }

    // (0) Items - Returns undefined
    if (myQueue.length !== 0) {
        console.log(myQueue.dequeue().value);
    } else {
        console.log("undefined");
    }
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    2
    1
    undefined

*/
