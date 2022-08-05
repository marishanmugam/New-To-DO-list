//selector
let todoInput = document.querySelector(".textbox");
let addbtn = document.querySelector(".todobtn");
let todolist = document.querySelector('.todolist')
let filter = document.querySelector(".filteroption");

//todo function

const addTodo = (eve) => {
  eve.preventDefault();
  if (todoInput.value === "") {
    alert("Input field cant`t empty");
  } else {
    //    creating li conitaner
    let liDiv = document.createElement("div");
    liDiv.classList.add("licontainer");
   todolist.appendChild(liDiv)

    // creating li
    let li = document.createElement("li");
    li.innerText = todoInput.value;
    liDiv.appendChild(li);
    todoInput.value = null;
    todoInput.focus();

    // creating  button
    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    completeBtn.classList.add("completeBtn");
    liDiv.appendChild(completeBtn);
    completeBtn.addEventListener("click", completed);

    //  delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can" style=color:"green"></i>';
    deleteBtn.classList.add("deletebtn");
    liDiv.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteItem);
  }
};

// add event listenr
addbtn.addEventListener("click", addTodo);

const deleteItem = (ev) => {
  let item = ev.target.parentElement;
  item.classList.add("fall");
  item.addEventListener("transitionend", () => {
    item.remove();
  });
};

const completed = (com) => {
  let comItem = com.target.parentElement;
  comItem.classList.toggle("completed");
};

// const filterTodo = (event) => {
//   let filterItem = todolist.childNodes;
//   filterItem.forEach(function (tod) {
//     switch (event.target.value) {
//       case "All":
//         console.log(tod);
//         tod.style.display = "block";
//         break;

//       case "Completed":

//         console.log(todolist);
//        if(todolist.classList.contains("completed"))
//        {
//        tod.style.display = 'block';

//        console.log('completed');
//        }
//        else
//        {
//          console.log('hidden');
//            todolist.style.display = "block";
//        }
//         break;
//       case "Un Complted":
//         console.log("Uncompleted");
//         break;
//     }
//   });
// };

const filterTodo = () => {
  let filterItem = todolist.childNodes;
  console.log(filterItem.length);
  // for(let i = 0; i<=filterItem.length;i++){
  //     // console.log(filterItem[1].classList.contains("completed"));
  //     console.log(i);
  // }

  // for(let i = 0; i<= filterItem.length;i++)
  // {

  //   if(item.contains('completed'))
  //   {
  //     console.log('sucess');
  //   }
  // }

  // if(data.classList.contains('completed'))
  // {
  //     console.log('sucess');
  // }
};
filter.addEventListener("change", filterTodo);
