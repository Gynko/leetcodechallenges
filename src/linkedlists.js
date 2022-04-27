class Node {
  constructor(value) {
    this.node = {
      value: value,
      next: null,
    };
  }
}
export class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    var newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.length - 1) {
      this.append(value);
      return;
    }
    var newNode = new Node(value);
    var iterate = 0;
    var previousNode = this.head;
    while (iterate !== index - 1) {
      previousNode = previousNode.next;
      iterate++;
    }
    var restOfNodes = previousNode.next;
    newNode.next = restOfNodes;
    previousNode.next = newNode;
    this.length++;
  }
  remove(index) {
    var iterate = 0;
    var previousNode = this.head;
    while (iterate !== index - 1) {
      previousNode = previousNode.next;
      iterate++;
    }
    var restOfNodes = previousNode.next.next;
    previousNode.next = restOfNodes;
    this.length--;
  }
  display() {
    var iterate = 0;
    var array = [];
    var locateNode = this.head;
    while (iterate < this.length) {
      array.push(locateNode.node.value);
      locateNode = locateNode.next;
      iterate++;
    }
    console.log(array);
    return array;
  }
  get(index) {
    var iterate = 0;
    var locateNode = this.head;
    while (iterate < index) {
      locateNode = locateNode.next;
      iterate++;
    }
    if (locateNode != null) return locateNode.node.value;
    else return undefined;
  }
}
