const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();


const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

addTodoBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
        alert("Veuillez entrer une tâche.");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const actions = document.createElement("div");
    actions.className = "todo-actions";

    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "done";
    doneBtn.addEventListener("click", () => {
        span.style.textDecoration = span.style.textDecoration === "line-through" ? "none" : "line-through";
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "delete";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);
    todoList.appendChild(li);

    todoInput.value = "";
});
