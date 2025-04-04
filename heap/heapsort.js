function  heapsort(array)
{
    let n=array.length;
    for(let i=Math.floor(n/2)-1;i>=0;i--)
    {
        sorHeap(array,n,i)
    }
    


    
for(let i=n-1;i>0;i--)
{
    [array[0],array[i]]=[array[i],array[0]];
    sorHeap(array,i,0)
}

    return array;
}
function sorHeap(array,n,i)
{
    let largest=i;
    let left=i*2+1;
    let right=i*2+2;
    if(left<n && array[largest]<array[left])
    {
        largest=left;
    }
    if(right<n && array[largest]<array[right])
        {
            largest=right;
        }
        if(largest!=i)
        {
            [array[i],array[largest]]=[array[largest],array[i]];
            sorHeap(array,n,largest);
        }
    

}

let array=[7,2,3,5,44,55,22,1,0]
console.log(heapsort(array))