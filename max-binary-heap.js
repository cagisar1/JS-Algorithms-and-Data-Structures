class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    insert(value){
        this.values.push(value);
        let child = this.values.length-1;
        let parent = Math.floor((child-1)/2);
        while(this.values[parent]<value){
            this.values[child] = this.values[parent];
            this.values[parent] = value;
            child = parent;
            parent = Math.floor((child-1)/2);
        }
        return this;
    }
    extractMax(){
        if (this.values.length === 0) return null;
        if(this.values.length === 1) return this.values.pop();
        let max = this.values[0];
        this.values[0] = this.values.pop();
        this.bubbleDown();
        return max;
    }
    bubbleDown(){
        let index = 0;
        let newRoot = this.values[0];
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        while(newRoot < this.values[left] || newRoot < this.values[right]){
            if(!this.values[right]){
                if(this.values[left]>newRoot){
                    this.values[index] = this.values[left];
                    this.values[left] = newRoot;
                }
                break;
            }
            if(this.values[left]>this.values[right]){
                this.values[index] = this.values[left];
                this.values[left] = newRoot;
                index = left;
            }
            else{
                this.values[index] = this.values[right];
                this.values[right] = newRoot;
                index = right;
            }
            left = 2 * index + 1;
            right = 2 * index + 2;
        }
    }
    
}

// let heap = new MaxBinaryHeap();
// heap.insert(18);
// heap.insert(27);
// heap.insert(39);
// heap.insert(41);
// console.log(heap.insert(78));
// console.log("Before extraction!");
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// console.log(heap);

