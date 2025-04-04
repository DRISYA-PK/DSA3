class TreeNode{
    constructor()
    {
        this.childrens={}
        this.isEnd=false;
    }
}
class Trie{
    constructor()
    {
        this.root=new TreeNode();
    }
    search(word)
    {
        let current=this.root;
          
        for( let char of word)
        {
            if(!current.childrens[char])
            {
                return false;
            }
            current=current.childrens[char]
        }
        return current.isEnd;
    }






    insert(string)
    {
        let current=this.root;
        for(let char of string)
        {
        if(!current.childrens[char])
        {
            current.childrens[char]=new TreeNode();
        }
        current=current.childrens[char];
        }
        current.isEnd=true;
    }


  displayWords()
  {
    let displaystack=[];
    let current=this.root;
    this.display(current,"",displaystack)
    return displaystack;
  }

  delete(word)
    {
    let current=this.root
  for(let char of word)
  {
    if(!current.childrens[char])
    {
        return "word not found";
    }
    current=current.childrens[char];
  }
  if(current.isEnd)
  {
    current.isEnd=false;
  }




  


  }
  display(root,word,displaystack)
  {
    if(root.isEnd)
    {
        displaystack.push(word)
    }
    for(let char in root.childrens)
    {
        this.display(root.childrens[char],word+char,displaystack)
    }
  }

suggestion(word)
{
    let current=this.root;
    for(let char of word)
    {
        if(!current.childrens[char])
        {
                return [];
        }
        current=current.childrens[char];
    }
    let suggestion=[];
    this.displaySuggestion(current,word,suggestion)
return suggestion;
}
displaySuggestion(root,word,suggestion)
{
     if(root.isEnd)
     {
        suggestion.push(word);

     }

     for(let char in root.childrens)
     {
    this.displaySuggestion(root.childrens[char],word+char,suggestion)
     }
}

autoCorrect(word)
{
    let current=this.root;
    for(let char of word)
    {
        if(!current.childrens[char])
        {
            return "Invalid spelling"
        }
        current=current.childrens[char];
    }
    if(current.isEnd)
    {
        return "Correct"
    }
    else{
        let suggestion=[];
        this.displaySuggestion(current,word,suggestion)
    return suggestion;
    }
}


}

const trie=new Trie();
trie.insert("arya")
trie.insert("aryaa")
trie.insert("aryasree")
console.log(trie.displayWords());
console.log(trie.search("hbjjhcsdvhfv"))

trie.delete("aryasreee")
console.log(trie.displayWords());
console.log(trie.suggestion("ybgddcbd"))
//trie.delete("arya")
console.log(trie.autoCorrect("aratafda"))