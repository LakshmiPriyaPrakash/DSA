class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {   //O(1)
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    addToTail(value) {  //O(n)
        let newNode = new Node(value);
        let curr = this.head;

        if(curr === null) {
            this.head = newNode;
            return;
        }

        while(curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
    }

    addToTailOpt(value) {   //O(n)
        const newNode = new Node(value);

        if(!this.tail) {
            this.head = newNode;
            this.tail = this.head;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    removeFromHead(){   //O(1)
        if(this.head) {
            let curr = this.head;
            this.head = curr.next;
            curr.next = null;
        }

        this.printLL();
    }

    removeFromTail() {  //O(n)
        let curr = this.head;

        if(!curr) return;
        if(!curr.next) {
            this.head = null;
            this.tail = null;
            this.printLL();
            return;
        }

        while(curr.next.next) {
            curr = curr.next;
        }

        curr.next = null;
        this.tail = curr;
        this.printLL();
    }

    printLL() { //O(1)
        let curr = this.head;

        if(curr === null){
            console.log(`Linked List is empty\n`);
            return;
        }

        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }

        console.log(`\n`);
    }
}


// const node3 = new Node(3, null);
// const node2 = new Node(2, node3);
// const node1 = new Node(1, node2);

const ll = new LinkedList();
// ll.head = node1;
ll.printLL();
ll.removeFromHead();
ll.removeFromTail();
ll.addToHead(1);
ll.printLL();
ll.removeFromHead();
ll.addToHead(0);
ll.printLL();
ll.removeFromTail();
ll.addToTailOpt(2);
ll.addToTailOpt(3);
ll.printLL();
ll.addToHead(-1);
ll.addToHead(-2);
ll.printLL();
ll.removeFromHead();
ll.removeFromTail();
