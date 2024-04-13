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
}

let tree = new Bst();
tree.insert(10);
tree.insert(18);
tree.insert(15);
tree.insert(7);
// console.log(tree);
console.log(tree.contains(12));
console.log(tree.find(5));