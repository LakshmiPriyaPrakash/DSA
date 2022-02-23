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

    addToHead(value){   //O(1)
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
}


const node3 = new Node(3, null);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

const ll = new LinkedList();
ll.head = node1;
ll.addToHead(0);

console.log(ll)
