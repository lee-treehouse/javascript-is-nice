class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);
    if (existingNode) {
      const newNode = { value, next: existingNode.next };

      if (!existingNode.next) {
        this.tail = newNode;
      }

      existingNode.next = newNode;
    }
  }

  find(value) {
    if (!this.head) return;

    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return;
  }

  delete(value) {
    if (!this.head) return;

    let current = this.head;

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = current;
    }
  }

  prepend(value) {
    const newNode = { value, next: this.head };

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  append(value) {
    const newNode = { value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  toArray() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}

// const linkedList1 = new LinkedList();
// linkedList1.append("hey");
// linkedList1.append("there");
// linkedList1.append("blimpy");
// linkedList1.append("boy");
// linkedList1.prepend("ready?");
// console.log(linkedList1.toArray());

// linkedList1.delete("blimpy");
// console.log(linkedList1.toArray());

// const linkedList2 = new LinkedList();
// linkedList2.prepend("yo, ready?");
// linkedList2.append("yeah?");
// console.log(linkedList2.toArray());

const linkedList3 = new LinkedList();
linkedList3.prepend("woosh");
linkedList3.prepend("woosh");
linkedList3.prepend("oh");
//linkedList3.append("Yeah");
linkedList3.prepend("woosh");
linkedList3.prepend("woosh");
console.log(linkedList3.toArray());

linkedList3.delete("woosh");
console.log(linkedList3.toArray());
console.log(linkedList3);

linkedList3.append("all");
linkedList3.append("good");
console.log(linkedList3.toArray());
console.log(linkedList3);
console.log(linkedList3.find("all"));
