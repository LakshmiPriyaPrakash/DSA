class Node {
    constructor(value = null, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
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
        this.head.prev = newNode;
        this.head = newNode;
    }


    addToTail(value) {   //O(1)
        const newNode = new Node(value);

        if(!this.tail) {
            this.head = newNode;
            this.tail = this.head;
            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
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


    removeFromTail() { //O(1)
        if(!this.tail || !this.tail.prev) {
            this.head = null;
            this.tail = null;
            this.printLL();
            return;
        }

        if(this.tail) {
            let curr = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            curr.prev = null;
        }
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
ll.addToTail(2);
ll.addToTail(3);
ll.printLL();
ll.addToHead(-1);
ll.addToHead(-2);
ll.printLL();
ll.removeFromHead();
ll.removeFromTail();
