class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head) this.head=newNode;
        if(this.tail) this.tail.next = newNode;
        this.tail=newNode;
        this.length+=1;
        return this;
    }
    pop(){
        if(this.length===0) return null; //or undefined
        let node = this.head, newTail=node;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        else{
            while(node.next){
                newTail = node;
                node=node.next;
            }
            this.tail=newTail;
            newTail.next=null;
        }
        this.length--;
        return node.val;
    }
    shift(){
        if(this.length===0) return null; //or undefined
        if(this.length===1) this.tail=null;
        let node = this.head;
        this.head=this.head.next;
        this.length--;
        return node.val;
    }
    unshift(val){
        let newNode = new Node(val);
        newNode.next=this.head;
        if(this.length===0) this.tail=newNode;
        this.head=newNode;
        this.length++;
        return this;
    }
    get(pos){
        if(pos < 0 || pos >= this.length) return null;
        let count = 0;
        let currentNode = this.head;
        while(currentNode && count<=pos){
            if(count===pos) return currentNode; //or currentNode.val
            count++;
            currentNode=currentNode.next;
        }
        return null;
    }
    set(pos, val){
        let node = this.get(pos);
        if(node){
            node.val=val;
            return true;
        }
        return null;
    }
    insert(pos, val){
        if(pos < 0 || pos > this.length) return false;
        if(pos === 0) return !!this.unshift(val);
        if(pos === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(pos-1);
        newNode.next=prevNode.next;
        prevNode.next=newNode;
        this.length++;
        return true;
    }
    remove(pos){
        if(pos < 0 || pos >= this.length) return null; //or undefined
        if(pos===0) return this.shift();
        if(pos===this.length-1) return this.pop();

        let prevNode = get(pos-1);
        let nodeToRemove = prevNode.next;
        prevNode.next = nodeToRemove.next;
        this.length--;
        return nodeToRemove;
    }
    reverse(){
        if(this.length===1) return this;
        if(this.length === 2){
            let aux = this.head;
            this.head = this.tail;
            this.tail = aux;
        }

        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        
        let prevNode = null;
        let nextNode;
        while(node){
            nextNode = node.next;
            node.next = prevNode;
            prevNode = node;
            node = nextNode;
        }
        return this;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

}

// let nums = new SinglyLinkedList();

// nums.push(0);
// nums.push(5);
// nums.push(18);
// nums.push(25);
// nums.push(7);
// nums.push(6);
// nums.print();
// nums.reverse();
// console.log();
// nums.print();
// console.log("");
// console.log("Head:", nums.head);
// console.log("Tail:", nums.tail);

