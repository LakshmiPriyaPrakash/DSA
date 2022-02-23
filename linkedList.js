class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(value) {   //O(1)
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    addToTail(value) {  //O(n)
        let newNode = new Node(value);
        let curr = this.head;

        while(curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
    }

    printLL() { //O(1)
        let curr = this.head;

        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }

        console.log(`\n`);
    }
}


const node3 = new Node(3, null);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

const ll = new LinkedList();
ll.head = node1;
ll.printLL();
ll.addToHead(0);
ll.printLL();
ll.addToTail(4);
ll.printLL()
