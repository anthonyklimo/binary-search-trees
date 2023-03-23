import Node from "./node";

class Tree {
    constructor(array) {
        const sortedArray = Array.from(new Set(array)).sort((a, b) => a - b);
        this.root = this.buildTree(sortedArray);
    }

    buildTree(sortedArray) {
        if (sortedArray.length === 0) {
            return null;
        }

        const mid = Math.floor(sortedArray.length/2);
        const root = new Node(sortedArray[mid]);

        Node.left = this.buildTree(sortedArray.slice(0, mid));
        Node.right = this.buildTree(sortedArray.slice(mid + 1))
        return root;
    }

    insert(node, key) {
        if (node === null) {
            node = new Node(key);
            return value;
        }

        if (key < node.key) {
            node.left = this.insertNode(node.left, key);
        } else {
            node.right = this.insertNode(node.right, key);
        }

        return node;
    }

    delete(node = this.root, value) {
        if (node === null) return;

        if (value < node.key) {
            node.left = this.delete(node.left, value);
        } else if (value > node.key) {
            node.right = this.delete(node.right, value);
        } else {
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }
            
            node.key = minValue(node.right);

            node.left = this.delete(node.right, node.key);
        }
        return node;
    }

    minValue(node) {
        let min = node.key
        while (node.left !== null) {
            min = node.left.key;
            node = node.left;
        }
        return min;
    }

    find(node = this.root, value) {
        if (node === null) return;

        while (node.key !== value) {
            if (value > node.key) {
                node = node.right;
            } else {
                node = node.left;
            }
        }
        return node;
    }

    levelOrder(callback, node = this.root) {
        if (node === null) return;

        let currentNode = node;
        const queue = [currentNode];
        const output = [];

        while (queue.length > 0) {
            currentNode = queue[0];
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            if (callback) {
                callback(currentNode);
            }
            output.push(queue.shift());
        }
        return output;
    }

    preorder(callback, node = this.root, output = []) {
        if (node === null) return;

        if (callback) {
            callback(node);
        }
        output.push(node.key);
        this.preorder(node.left);
        this.preorder(node.right);

        return output;
    }

    inorder(callback, node = this.root, output = []) {
        if (node === null)
    }