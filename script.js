document.getElementById("addBtn").addEventListener("click", addTodo);
document.getElementById("todosBtn").addEventListener("click", showTodos);
document
  .getElementById("completedBtn")
  .addEventListener("click", showCompleted);

let todos = [];
let completedTodos = [];

function addTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  var title_error = document.getElementById("title-error");
  var desc_error = document.getElementById("desc-error");

  title_error.innerText = "";
  desc_error.innerText = "";


  if (title && description) {
    const todo = {
      title: title,
      description: description,
    };
    todos.push(todo);
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    renderTodos();
  } else {
    
    if(!title && !description)
    {
      title_error.innerText("Please add title and description")
      
    } 
    else if(!title) {
      title_error.innerText("Please add the title");
    } 
    else if(!description)
    {
      desc_error.innerText("Please add the description");
    }

  }
}

function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
            <div>
                <strong>${todo.title}</strong><br>
                ${todo.description}
            </div>
            <div>
                <span class="deleteBtn" onclick="deleteTodo(${index})">🗑</span>
                <span class="checkBtn" onclick="completeTodo(${index})">✅</span>
            </div>
        `;
    todoList.appendChild(todoItem);
  });
}

function completeTodo(index) {
  const completedTodo = todos.splice(index, 1)[0];
  completedTodos.push(completedTodo);
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function showTodos() {
  document.getElementById("todoList").innerHTML = "";
  document.getElementById("todosBtn").classList.add("active");
  document.getElementById("completedBtn").classList.remove("active");
  renderTodos();
}

function showCompleted() {
  document.getElementById("todoList").innerHTML = "";
  document.getElementById("todosBtn").classList.remove("active");
  document.getElementById("completedBtn").classList.add("active");

  completedTodos.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item", "completed");
    todoItem.innerHTML = `
            <div>
                <strong>${todo.title}</strong><br>
                ${todo.description}
            </div>
        `;
    document.getElementById("todoList").appendChild(todoItem);
  });
}
