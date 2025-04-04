class Heap{
    constructor()
    {
        this.heap=[];
    }
    insert(value)
    {
        this.heap.push(value);
        this.checkHeap(this.heap.length-1)
    }
    getParentIndex(index)
    {
        return Math.floor((index-1)/2)
    }
    swap(index1,index2)
    { 
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]

    }
    checkHeap(index)
    {
        let parentIndex=this.getParentIndex(index)
        while(index>0 && this.heap[parentIndex]>this.heap[index])
        {
            this.swap(parentIndex,index)
            index=parentIndex;
            parentIndex=this.getParentIndex(index);
        }
    }
    deleteHeap()
    {

        if(!this.heap) return false;
        if(this.heap.length===1) return this.heap.pop();
        let minValue=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.hepfyDown(0)
        return minValue;
    }
    getLeftChildIndex(index)
    {
        return ((index*2)+1)
    }
    getRightChildIndex(index)
    {
        return ((index*2)+2)
    }

    hepfyDown(index)
    {
        let minIndex=index;
       let left=this.getLeftChildIndex(index);
       let right=this.getRightChildIndex(index);
       console.log(this.heap[left]<this.heap[index])
       if(left<this.heap.length && this.heap[left]<this.heap[index])
       {
        console.log("hhh")
            minIndex=left;
       }
       if(right<this.heap.length && this.heap[right]<this.heap[index])
        {
             minIndex=right;
        }
        if(minIndex!=index)
        {
            this.swap(index,minIndex)
            this.hepfyDown(minIndex)
        }


    }

    print()
    {
        console.log(this.heap)
    }

    peek()
    {
        if(this.heap.length===0) return false;
        console.log(this.heap[0])
    }
}

const heap=new Heap();
heap.insert(10);
heap.insert(9);
heap.insert(8);
heap.insert(4);

heap.insert(5);
heap.print();

heap.deleteHeap();
heap.print();
heap.peek();