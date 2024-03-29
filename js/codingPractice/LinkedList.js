class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(size){
    this.head = null;
    this.size = size || 0;
  }

  add(node){
    if(this.head && this.size >= 1) {
      let curr = this.head;
      this.head = node;
      this.head.next = curr;
    } else {
      this.head = node;
    }    
    this.size++;
  }

  print() {
    let list;
    if(this.size > 0 ){
      let curr = this.head;
      list = curr.value;
      
      while(curr) {
        if(curr.next){
          list = list + "," + curr.next.value;
        }
        curr = curr.next;
      }
    }else {
      return "Empty";
    }
    return list;
  }

  contains(val){
    if (this.size == 0 )
      return null;
    
    let curr = this.head;
    while(curr){
      if(curr.value == val){
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  remove(val){
    if(this.size == 0)
      throw new Error('No Element in List Error');

    let curr = this.head;
    let prev = this.head;
    
    if(this.head.value === val){
      // curr = this.head;
      this.head = this.head.next;
      curr = null;
      this.size--;
      return;
    } 
    
    while(curr){
      if(curr.value === val){
        prev.next = curr.next;
        curr = null;
        this.size--;
        return; 
      }
      prev = curr;
      curr = curr.next;
    }
  }
}

// let hiNode = new Node(3);
// console.log(hiNode);

let myList = new LinkedList();
myList.add(new Node(4));
myList.add(new Node(3));
myList.add(new Node(2));
myList.add(new Node(1));
myList.add(new Node(0));


console.log(myList.print());
console.log(myList.contains(4));
console.log(myList.contains(0));
console.log(myList.contains(5));

myList.remove(4);
console.log(myList.print());

function reverseList(myList){
  console.log(myList.head);
  console.log(myList.size);
  console.log(myList.print());

  if(myList.size == 0 || myList.size == 1)
    return;

  let curr = myList.head;
  let prev = myList.head;
  let next = myList.head.next; 
  let i = 0;

  while(next && i < 5){
    myList.head = next;
    next = next.next;
    curr = myList.head;
    curr.next = prev;
    i++;
  }
  
}

reverseList(myList);
console.log(myList.print());

