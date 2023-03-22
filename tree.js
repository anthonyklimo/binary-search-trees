import Node from "./node";

class Tree {
    constructor(array) {
        const sortedArray = Array.from(new Set(array)).sort((a, b) => a - b);
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
}