const input = document.querySelector(`input`);
const ul = document.querySelector(`ul`);
let todoTasks = [];

// render function 

function render (){
    ul.innerHTML = "";
    for (let i = 0; i < todoTasks.length; i++) {
        ul.innerHTML += `<div class="li-btns"><li id="li">${todoTasks[i]}</li><button onclick="deleteTask(${i})"> Delete This Task </button><button onclick="editTask(${i})"> Edit This Task </button></div>`;
      }
}

// Add Task Button

function addTask(params) {
  todoTasks.push(input.value);
  input.value = "";
 
  render()
}

// delete All button

function deleteAll(params) {
  ul.innerHTML = ``;
  todoTasks = [];
}

// delete task button

function deleteTask(index) {
 
  todoTasks.splice(index, 1);
  render()
}

// edit task button 

function editTask(index) {
 let editedValue =prompt("Enter a value to edit the following")
    todoTasks.splice(index, 1,editedValue);
    render()
  }