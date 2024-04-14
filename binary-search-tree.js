class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Bst{
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);
        if(!this.root) this.root = newNode;
        else{
            let node = this.root;
            let ok = true;
            while(ok){
                if(val === node.value) return undefined;
                if(val>node.value){
                    if(node.right){
                        node = node.right;
                    }
                    else{
                        node.right = newNode;
                        ok = false;
                    }
                }
                else{
                    if(node.left){
                        node = node.left;
                    }
                    else{
                        node.left = newNode;
                        ok = false;
                    }
                }
            }
            return this;
        }
    }
    contains(val){
        if(!this.root) return false;
        let currentNode = this.root;
        while(currentNode){
            if(val===currentNode.value) return true;
            if(val<currentNode.value){
                currentNode=currentNode.left;
            }
            else {
                currentNode=currentNode.right;
            }
        }
        return false;
    }

    find(val){
        if(!this.root) return undefined;
        let currentNode = this.root;
        while(currentNode){
            if(val===currentNode.value) return currentNode;
            if(val<currentNode.value) currentNode=currentNode.left;
            else currentNode=currentNode.right;
        }
        return undefined;
    }
    bfs(){
        let queue = [];
        let nodeValues = [];
        let currentNode;
        queue.push(this.root);
        while(queue.length>0){
            currentNode = queue.shift();
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            nodeValues.push(currentNode.value);
        }
        return nodeValues;
    }
    dfs_preOrder(){
        let data = [];
        function traverse(node){
            data.push(node.value);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    // Alternative to dfs_preOrder
    // dfs_preOrder(node, values){ //root left right
    //     if(!node) return;
    //     values.push(node.value);
    //     this.dfs_preOrder(node.left, values);
    //     this.dfs_preOrder(node.right, values);
    // }
    dfs_postOrder(){
        let data = [];
        const traverse = (node) => {
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    dfs_inOrder(){
        let data = [];
        const traverse = (node)=>{
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}



let tree = new Bst();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// console.log(tree);
// console.log(tree.contains(15));
// console.log(tree.find(6));
// let values = tree.bfs();
// console.log(`Values in the tree are [${values}]`);
let preOrderData = tree.dfs_preOrder();
console.log(preOrderData);
let postOrderData = tree.dfs_postOrder();
console.log(postOrderData);
let inOrderData = tree.dfs_inOrder();
console.log(inOrderData);
