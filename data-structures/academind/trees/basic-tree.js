class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  addNode(value) {
    const node = new Node(value, this);
    this.children.push(node);
    return { node, index: this.children.length - 1 };
  }

  removeNode(index) {
    this.children.splice(index, 1);
  }
}

class Tree {
  constructor(value) {
    this.root = new Node(value);
  }
}

const fileSystem = new Tree("/");
const documentsNode = fileSystem.root.addNode("/documents").node;
documentsNode.addNode("results.txt");

const downloadsNode = fileSystem.root.addNode("/downloads");
console.log(fileSystem);
console.dir(fileSystem, { depth: null });
