# Data structures and algorithms<!-- omit in toc -->

# Table <!-- omit in toc -->

- [1. Arrays](#1-arrays)
- [2. Hash tables](#2-hash-tables)
- [3. Linked lists](#3-linked-lists)
  - [3.1. Why Linked lists?](#31-why-linked-lists)
  - [3.2. What are linked lists](#32-what-are-linked-lists)
  - [3.3. The great things with LL](#33-the-great-things-with-ll)
  - [3.4. The drawbacks with LL](#34-the-drawbacks-with-ll)
  - [LL and Big O](#ll-and-big-o)
  - [3.5. Linked lists in JS](#35-linked-lists-in-js)

## 1. Arrays

## 2. Hash tables

## 3. Linked lists

### 3.1. Why Linked lists?

What problem do we encounter with arrays?

1. There is only a certain amount of adjacent memory that we have access to. Dynamic arrays can double up if needed has a performance implication that costs O(n).
2. Insert and delete operations have to shift indexes

=> Hash tables could allow us to allocate memory anywhere we wanted in memory. But they are not ordered.

=> Linked lists to the rescue. But there are always tradeoffs when it comes to data structures

### 3.2. What are linked lists

They are a serie of nodes where each node `points` to the next until the last node which is null

Head => node1 => node2 => Tail => null

A pointer is a reference to another place in memory. obj2 points to obj1 in the following code.

```javascript
const obj1 = { a: true };
const obj2 = obj1;
```

### 3.3. The great things with LL

Inserting/deleting a node without having to shift all the indexes like in arrays.

### 3.4. The drawbacks with LL

To search you need to `traverse` with LL.

Computer also have caching possibilities that makes reading from sequential memory (like with arrays) more efficient.

### LL and Big O

1. prepend O(1)
2. append O(1)
3. lookup O(n)
4. insert O(n) => Worst case
5. delete O(n) => Worst case

### 3.5. Linked lists in JS

They don't exist natively in JS. A possible implementation here:

```javascript
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
}
```
