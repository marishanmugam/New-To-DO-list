//selector
let todoInput = document.querySelector(".textbox");
let addbtn = document.querySelector(".todobtn");
let todolist = document.querySelector(".todolist");
let filterOption = document.querySelector(".filteroption");

//todo function

const addTodo = (eve) => {
  eve.preventDefault();
  if (todoInput.value === "") {
    alert("Input field cant`t empty");
  } else {
    //    creating li conitaner
    let liDiv = document.createElement("div");
    liDiv.classList.add("licontainer");

    // creating li
    let newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todoitem");
    liDiv.appendChild(newTodo);
    // save to local storage
    saveLocal(todoInput.value);
    todoInput.value = "";
    todoInput.focus();

    // creating  button
    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    completeBtn.classList.add("completeBtn");
    liDiv.appendChild(completeBtn);
    completeBtn.addEventListener("click", completed);

    //  delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML =
      '<i class="fa-solid fa-trash-can" style=color:"green"></i>';
    deleteBtn.classList.add("deletebtn");
    liDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteItem);
    todolist.appendChild(liDiv);
  }
};
// add event listenr
addbtn.addEventListener("click", addTodo);

//for deleting todo
const deleteItem = (ev) => {
  let item = ev.target.parentElement;
  item.classList.add("fall");
  deleteLocal(item);
  item.addEventListener("transitionend", () => {
    item.remove();
  });
};

//if completed hiddien todo
const completed = (com) => {
  let comItem = com.target.parentElement;
  comItem.classList.toggle("completed");
};

//filte data based on selected
const filter = (e) => {
  let fiterData = [...todolist.children];
  fiterData.forEach((tododata) => {
    switch (e.target.value) {
      case "all":
        tododata.style.display = "flex";
        break;
      case "completed":
        if (tododata.classList.contains("completed")) {
          tododata.style.display = "flex";
        } else {
          tododata.style.display = "none";
        }
        break;

      case "uncomplted":
        if (!tododata.classList.contains("completed")) {
          tododata.style.display = "flex";
        } else {
          tododata.style.display = "none";
        }
        break;
    }
  });
};

filterOption.addEventListener("change", filter);

//saving at local storage
const saveLocal = (data) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(data);
  localStorage.setItem("todos", JSON.stringify(todos));
};

//getting local stroage data if strored in
const getLocal = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((tod) => {
    let liDiv = document.createElement("div");
    liDiv.classList.add("licontainer");

    // creating li
    let newTodo = document.createElement("li");
    newTodo.innerText = tod;
    newTodo.classList.add("todoitem");
    liDiv.appendChild(newTodo);

    todoInput.value = "";
    todoInput.focus();

    // creating  button
    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    completeBtn.classList.add("completeBtn");
    liDiv.appendChild(completeBtn);
    completeBtn.addEventListener("click", completed);

    //  delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML =
      '<i class="fa-solid fa-trash-can" style=color:"green"></i>';
    deleteBtn.classList.add("deletebtn");
    liDiv.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteItem);

    todolist.appendChild(liDiv);
  });
};

document.addEventListener("DOMContentLoaded", getLocal);

//deleting data in local stroage
const deleteLocal = (delTodo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  let delItem = delTodo.children[0].innerText;
  todos.splice(todos.indexOf(delItem), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
};
