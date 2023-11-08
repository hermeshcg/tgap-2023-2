import BinarySearchTree from './lib/binary-search-tree.class.js'

let tree = new BinarySearchTree('45')

tree.insert(45);
tree.insert(24, 45);
tree.insert(72, 45);
tree.insert(9, 24);
tree.insert(39, 24);
tree.insert(66, 72);
tree.insert(84, 72);
tree.insert(3, 9);
tree.insert(15, 9);
tree.insert(36, 39);
tree.insert(42, 39);
tree.insert(60, 66);
tree.insert(69, 66);
tree.insert(78, 84);
tree.insert(96, 84);
tree.insert(0, 3);
tree.insert(6, 3);
tree.insert(12, 15);
tree.insert(18, 15);
tree.insert(27, 36);
tree.insert(49, 60);
tree.insert(63, 40);
tree.insert(75, 78);
tree.insert(81, 78);
tree.insert(90, 96);
tree.insert(99, 96);
tree.insert(33, 37);
tree.insert(54, 49);
tree.insert(87, 90);
tree.insert(51, 54);
tree.insert(57, 54);

// Percurso pré-ordem (pre-order)
// tree.preOrderTraversal((data) => console.log('pre ordem',data));
let preOrderArr = []
tree.preOrderTraversal((data) => preOrderArr.push(data.toString()));
console.log('Pre ordem - ', preOrderArr)

console.log('===')

// Percurso em ordem (in-order)
let inOrderArr = []
tree.inOrderTraversal((data) => inOrderArr.push(data.toString()));
console.log('Em ordem - ', inOrderArr)

console.log('===')

// Percurso pós-ordem (post-order)
let postOrderArr = []
tree.postOrderTraversal((data) => postOrderArr.push(data.toString()));
console.log('Pós ordem - ', postOrderArr)