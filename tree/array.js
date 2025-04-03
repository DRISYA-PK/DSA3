class ArrayBinaryTree{
    constructor()
    {
        this.root=[];
    }
    add(value)
    {
       // this.root.push(value);
        this.getIndex(this.root.length-1,value)

    }
    getParentIndex(index)
    {
        return Math.floor((i-1)/2)
    }
    getIndex(index)
    {
        let parentIndex=this.getIndex(index)
        if(i>0 && this.root[parentIndex]>this.root[index])
        {

        }
    }
}