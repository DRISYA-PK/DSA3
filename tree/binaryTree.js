class Node{
    constructor(value)
    {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinaryTree{
    constructor()
    {
        this.root=null;
        this.display=" ";
    }
    Insert(value)
    {
        const newNode=new Node(value);

        if(this.root===null)
        {
            this.root=newNode;
        }
        else{
            this.InsertValue(this.root,newNode)
        }

    }
    InsertValue(root,newNode)
    {
        if(newNode.value<root.value)
        {
            if(root.left===null)
            {
                root.left=newNode;
            }
            else{
                this.InsertValue(root.left,newNode)
            } 
        }
        else{
            if(root.right===null)
                {
                    root.right=newNode;
                }
                else{
                    this.InsertValue(root.right,newNode)
                }
        }
    }
    search(value)
    {
        if(this.root===null)
        {
            return "No value";
        }
        let current=this.root;
       // this.search
        while(current)
        {
            if(current.value===value)
            {
                return "value found";
            }
            else if(current.value>value)
            {
                current=current.left;

            }
            else{
                current=current.right;
            }
        }
        return "No node found";

    }
preOrderTraversal(node )
{
    if(!node) return ;
    console.log(node.value);
   // this.display +=" "+node.value;
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
   
    
}
inOrderTraversal(node)
{
    if(!node) return ;
    this.inOrderTraversal(node.left);

    console.log(node.value)
    this.inOrderTraversal(node.right);
}


postOrderTraversal(node)
{
    if(!node) return;
    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right)
    console.log(node.value);
}


bfs()
{
    let queue=[];
    queue.push(this.root);
    while(queue.length)
    {
      let curr=  queue.shift();
      console.log(curr.value);
      if(curr.left)
      {
        queue.push(curr.left);
      }
       if(curr.right)
       {
        queue.push(curr.right)
       }

    }
}

}


const node=new BinaryTree();
node.Insert(10);
node.Insert(5);
node.Insert(3);
node.Insert(7);
node.Insert(15)
console.log(node.search(30))
console.log(node.search(130))
node.preOrderTraversal(node.root)
console.log("-----------------------")

node.inOrderTraversal(node.root)
console.log("-----------------------")
node.postOrderTraversal(node.root)
console.log("-----------------------")
node.bfs();