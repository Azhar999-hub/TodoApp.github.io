var list = document.getElementById("list");

function addTodo(){

    var todo_Item = document.getElementById("todo-Item");
    
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_Item.value);
    li.appendChild(liText);
    list.appendChild(li);


   var editBtn = document.createElement("button");
   var editText = document.createTextNode("Edit");
   editBtn.appendChild(editText);
   editBtn.setAttribute("onclick","editItem(this)");
   editBtn.setAttribute("class","btn btn-success  ms-4");
   li.appendChild(editBtn);


   var delBtn = document.createElement("button")
   var delText = document.createTextNode("Delete")
   delBtn.setAttribute("class", "btn btn-danger ms-1")
   delBtn.setAttribute("onclick", "deleteItem(this)")
   delBtn.appendChild(delText)
   li.appendChild(delBtn);
 
    todo_Item.value = "";
}

function deleteAll(){
    list.innerHTML = "";
}

function editItem(e) {
    var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
  }

function deleteItem(e){
    e.parentNode.remove();
}