// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // create new node from value
    let newNode = new TreeNode(val);

    // insert root value if none exists
    if (this.root === null) {
      this.root = newNode;
    }

    // otherwise, traverse tree to insert newNode in appropriate spot
    // if val is less than currentNode, go left
    else if (val < currentNode.val) {
      // see if empty .left exists
      if (currentNode.left === null) {
        // if so, place newNode
        currentNode.left = newNode;
        return;
      }
      // if not, recurse
      else {
        currentNode = currentNode.left;
        this.insert(val, currentNode);
      }
    }
    // val greater than OR equal to currentNode, go right
    else {
      // if .right doesn't already have node
      if (currentNode.right === null) {
        // if so, place newNode
        currentNode.right = newNode;
        return;
      }
      // if not, recurse
      else {
        currentNode = currentNode.right;
        this.insert(val, currentNode);
      }
    }
  }

  search(val, currentNode=this.root) {
    let rtnVal;
    // if currentNode is null value, return false
    if (currentNode === null) {
      return false;
    }
    // if currentNode.val === val, return true
    if (currentNode.val === val) {
      return true;
    }
    // otherwise, if val < currentNode.val, go left and recurse
    if (val < currentNode.val) {
      currentNode = currentNode.left;
      rtnVal = this.search(val, currentNode);
    }
    // if val >= currentNode.val, go right and recurse;
    else {
      currentNode = currentNode.right;
      rtnVal = this.search(val, currentNode);
    }
    
    return rtnVal;
  }


  preOrderTraversal(currentNode = this.root) {
    // see if you've reached bottom of current recursive search
    if (currentNode === null) {
      return;
    }

    // print current value
    console.log(currentNode.val);

    // visit left node
    this.preOrderTraversal(currentNode.left);

    // visit right node
    this.preOrderTraversal(currentNode.right);

  }


  inOrderTraversal(currentNode = this.root) {
    // base case
    if (currentNode === null) {
      return;
    }

    // recursively visit all left
    this.inOrderTraversal(currentNode.left);

    // print values
    console.log(currentNode.val);

    // recursively visit all right
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    // base case
    if (currentNode === null) {
      return;
    }
    // recursively visit left nodes
    this.postOrderTraversal(currentNode.left);
    // recursively visit right nodes
    this.postOrderTraversal(currentNode.right);
    // print node values
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
    //      4
    //    /   \
    //   2     6
    //  / \   / \
    // 1   3 5   7

    // 4, 2, 6, 1, 3, 5, 7
  breadthFirstTraversal() {
    // initialize a queue with the root node
    let queue = [this.root];

    // while the queue is not empty
    while (queue.length > 0) {
      // print and remove first node in queue
      let removedNode = queue.shift();
      console.log(removedNode.val);
      // if the node has a left node
      if (removedNode.left !== null) {
        // push the left node on the back of the queue
        queue.push(removedNode.left);
      }
      // if the node has a right node
      if (removedNode.right !== null) {
        // push the right node on the back of the queue
        queue.push(removedNode.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  // right node first
  //      4
  //    /   \
  //   2     6
  //  / \   / \
  // 1   3 5   7

  // 4, 6, 7, 5, 2, 3, 1
  depthFirstTraversal() {
    // initialize a stack with the root node
    let stack = [this.root];

    // while the stack is not empty
    while (stack.length > 0) {
      // print and remove first node in stack
      let removedNode = stack.pop();
      console.log(removedNode.val);

      // if the node has a left node
      if (removedNode.left !== null) {
        // push the left node on the back of the stack
        stack.push(removedNode.left);
      }

      // if the node has a right node
      if (removedNode.right !== null) {
        // push the right node on the back of the stack
        stack.push(removedNode.right);
      }

    }
  }
}

module.exports = { BinarySearchTree, TreeNode };