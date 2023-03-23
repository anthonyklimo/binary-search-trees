import Tree from "./tree";

function randomArray(length, max) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * max));
    }
    return array;
}

const binaryTree = new Tree(randomArray(10, 20));

console.log(`isBalanced: ${binaryTree.isBalanced()}`);
console.log(`levelorder: ${binaryTree.levelOrder}`);
console.log(`inorder: ${binaryTree.inorder}`);
console.log(`preorder: ${binaryTree.preorder}`);
console.log(`postorder: ${binaryTree.postorder}`);

binaryTree.insert(200);
binaryTree.insert(300);
binaryTree.insert(400);

console.log(`isBalanced: ${binaryTree.isBalanced()}`);
binaryTree = binaryTree.rebalance;
console.log(`levelorder: ${binaryTree.levelOrder}`);
console.log(`inorder: ${binaryTree.inorder}`);
console.log(`preorder: ${binaryTree.preorder}`);
console.log(`postorder: ${binaryTree.postorder}`);
