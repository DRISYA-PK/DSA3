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

getMin(node)
{
    if(!node.left)
    {
        return node.value;
    }
    else
    {
        return this.getMin(node.left)
    }
}

getMax(root)
{
    if(!root.right)
    {
        return root.value;
    }
    else
    {
        return this.getMax(root.right)
    }
}

 deletNode(node,value)
{ 
    if(node===null) return null;
    if(node.value<value)
    {
      node.right=  this.deletNode(node.right,value)
    }
    else if(node.value>value)
    {
       node.left= this.deletNode(node.left,value)
    }
    else
    {
        if(!node.left) return node.right;
        if(!node.right) return node.left;
        node.value=this.getMin(node.right)
        node.right=this.deletNode(node.right,node.value)
    }
 return node;

}
findClosetValue(root,target,closet=root.value)
{
   // let closet=root.value;
   if(root===null) return closet;
    if(Math.abs(target-root.value)<Math.abs(target-closet))
    {
        closet=root.value;
    }
    if(target<root.value)
    {
        return this.findClosetValue(root.left,target,closet);
    }
    else if(target>root.value)
    {
        return this.findClosetValue(root.right,target,closet);
    }
    else
    {
          return root.value;
    }
}


isBst(root,min=-Infinity,max=Infinity)
{
    if(root==null) return true;
    if(root.value<=min||root.value>=max)
    {
        return false;
    }
    return(this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max))
}
isSubset(root, subset) {
    if (!subset) return true;   // An empty tree is a subtree of any tree.
   if (!root) return false;    // A non-empty subtree cannot be a part of an empty tree.

    // If current nodes match, check both left and right subtrees.
    if (this.checkingSubset(root, subset)) {
        return true;
    }

    // Check in left or right subtrees.
    return (this.isSubset(root.left, subset) || this.isSubset(root.right, subset));
}

checkingSubset(root, subset) {
    if (!root && !subset) return true;  // Both are empty, so match.
    if (!root || !subset) return false; // One is empty, the other is not.
    
    // Check current node and then check left and right children.
    return (root.value === subset.value && 
            this.checkingSubset(root.left, subset.left) && 
            this.checkingSubset(root.right, subset.right));
}



}


const node=new BinaryTree();
node.Insert(10);
node.Insert(40)
node.Insert(5);
node.Insert(3);
node.Insert(7);
node.Insert(15)
console.log(node.search(30))
console.log(node.search(130))
console.log("------preorder----------------")
node.preOrderTraversal(node.root)
console.log("--------inorder---------------")

node.inOrderTraversal(node.root)
console.log("----------post-------------")
node.postOrderTraversal(node.root)
console.log("----------bfs-------------")
node.bfs();

console.log("-----------------------")

console.log(node.getMin(node.root))
console.log(node.getMax(node.root))

console.log("---------delte--------------")
//console.log(node.findClosetValue(node.root,10));

//n//ode.deletNode(node.root,10)
node.inOrderTraversal(node.root)


console.log("-----------------------")
console.log(node.findClosetValue(node.root,6));


console.log(node.isBst(node.root))

node.root.left.left.value=30000;
console.log(node.isBst(node.root))


//const subnode=new BinaryTree();
const subnode = new BinaryTree();
subnode.root = new Node(5);
subnode.root.left = new Node(3);
subnode.root.right = new Node(7);

console.log("--------checking subnode---------------");
console.log(node.isSubset(node.root, subnode.root));

console.log("--------checking subnode---------------");
console.log(node.isSubset(node.root, subnode.root)); 
