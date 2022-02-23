class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}


const node3 = new Node(3, null);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

const ll = new LinkedList();
ll.head = node1;

console.log(ll)
