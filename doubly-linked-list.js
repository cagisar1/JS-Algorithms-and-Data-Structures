class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        newNode.prev = this.tail;
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop(){
        if(this.length === 0) return null;
        let removedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = removedNode.prev;
            this.tail.next = null;
        }
        this.length--;
        return removedNode;
    }
    shift(){
        if(this.length === 0) return null;
        let removedNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = removedNode.next;
            this.head.prev = null;
        }
        removedNode.next = null;
        this.length--;
        return removedNode;
    }

    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.head.prev=newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(pos){
        if(pos<0 || pos>=this.length) return null;
        let count;
        let currentNode;
        if(pos >= Math.floor((this.length-1)/2)+1){
            count=this.length-1-pos;
            currentNode = this.tail;
            while(count){
                currentNode = currentNode.prev;
                count--;
            }
        }
        else{
            count=0;
            currentNode = this.head;
            while(count!==pos){
                currentNode=currentNode.next;
                count++;
            }
        }
        return currentNode;
    }
    set(pos, val){
        let nodeToReset = this.get(pos);
        if(nodeToReset) {
            nodeToReset.val=val;
            return true;
        }
        return false;
    }
    insert(pos,val){
        if(pos===0) return !!this.unshift(val);
        if(pos===this.length) return !!this.push(val);

        let prevNode = this.get(pos-1);
        if(prevNode){
            let newNode = new Node(val);
            let nextNode = prevNode.next; 
            newNode.next = nextNode; newNode.prev = prevNode;
            nextNode.prev = newNode; prevNode.next = newNode;
            this.length++;
            return true;
        }
        return false;
    }
    remove(pos){
        if(pos === 0) return this.shift();
        if(pos === this.length-1) return this.pop();

        let nodeToRemove = this.get(pos);
        if(nodeToRemove){
            let nextNode = nodeToRemove.next;
            nextNode.prev = nodeToRemove.prev;
            nodeToRemove.prev.next = nextNode;
            nodeToRemove.next = nodeToRemove.prev = null;
            this.length--;
        }
        return nodeToRemove;
    }
    print(){
        let node = this.head;
        while(node){
            console.log(node.val);
            node = node.next;
        }
    }
}


let dll = new DoublyLinkedList();
dll.push(5).push(10).push(15).push(20);
