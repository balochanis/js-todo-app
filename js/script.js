function validateUser(el)
{
  if(el.value == "")
  {
    el.classList.remove("border-danger", 'error-msg');
    el.parentNode.childNodes[1].classList.remove('d-block');
  }
}

function addToDo() {
  let todoInput = document.getElementById("todo-input");
  let mainList = document.getElementById("todo-list");

  if (todoInput.value == "") {
    todoInput.classList.add("border-danger", 'error-msg');

    let errMsg = todoInput.parentNode.childNodes[1];

    errMsg.classList.add("class", "d-block");
  }

 if (!todoInput.value == "") {
    //Add Todo
    let toDoEl = document.createElement('div');
    let paraEl = document.createElement('p');

      //Delete Button
      let btnControls = document.createElement('div');
      btnControls.classList.add('d-block', 'bg-warning');
      let delBtnEl = document.createElement("button");
      let delIcon = document.createElement("i");
  
      delIcon.classList.add("fa", "fa-trash");
      delBtnEl.classList.add("btn", "btn-sm", "btn-danger", "float-right");
      delBtnEl.setAttribute("onclick", "delToDo(this)");
      delBtnEl.setAttribute("aria-hidden", "true");
      delBtnEl.setAttribute("title", "Delete");
  
      toDoEl.appendChild(btnControls);
      btnControls.appendChild(delBtnEl);
      delBtnEl.appendChild(delIcon);
  
      // //Edit Button
      let editBtnEl = document.createElement("button");
      let editIcon = document.createElement("i");
  
      editIcon.classList.add("fa", "fa-pencil");
      editIcon.setAttribute("title", "Edit");
      editIcon.setAttribute("aria-hidden", "true");
      editBtnEl.classList.add("btn", "btn-sm", "btn-primary", "float-right");
      editBtnEl.setAttribute("onclick", "editToDo(this)");
      btnControls.appendChild(editBtnEl);
      editBtnEl.appendChild(editIcon);
    let toDoTxt = document.createTextNode(todoInput.value);
    paraEl.classList.add('p-6');
    toDoEl.classList.add("list-item");

    mainList.appendChild(toDoEl);
    toDoEl.appendChild(paraEl);
    paraEl.appendChild(toDoTxt);
    todoInput.value = "";

  


  }
}






function editToDo(el) {
  let todoInput = document.getElementById("todo-input");
  let EditBtn = document.getElementById('add-btn');
  let updateBtn = document.getElementById('update-btn');
  
  todoInput.value = el.innerHTML;
  let newTxt = el.parentNode.childNodes[0].nodeValue;
  todoInput.value = newTxt;
  todoInput.value = el.parentNode.nextSibling.innerHTML;
  EditBtn.style.display = 'none';
  updateBtn.classList.remove('d-none');
  updateBtn.classList.add('btn-block');
}

function delToDo(el) {
  el.parentNode.parentNode.remove();
}

function deleteAllToDos() {
  let mainList = document.getElementById("todo-list");

  let numElements = mainList.childNodes.length;

  if (numElements > 1) {
    var confirm = window.confirm("Do you really want to delete all todos?");
  }
  if (confirm) {
    let mainList = document.getElementById("todo-list");

    mainList.innerHTML = "";
  }
}

