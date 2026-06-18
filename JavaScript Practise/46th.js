// let draggedTask = null;

// function addTask(columnId) {

//     let title = prompt("Enter task title");

//     if (!title) return;

//     let priority = prompt(
//         "Priority (low / medium / urgent)"
//     );

//     let task = document.createElement("div");

//     task.classList.add("task");
//     task.setAttribute("draggable", true);

//     task.innerHTML = `
//         <h4>${title}</h4>
//         <span class="badge ${priority}">
//             ${priority}
//         </span>
//     `;

//     task.addEventListener("dragstart", () => {
//         draggedTask = task;
//     });

//     document
//         .getElementById(columnId)
//         .appendChild(task);
// }

// const containers =
//     document.querySelectorAll(".task-container");

// containers.forEach(container => {

//     container.addEventListener("dragover", (e) => {
//         e.preventDefault();
//     });

//     container.addEventListener("drop", () => {

//         if (draggedTask) {
//             container.appendChild(draggedTask);
//         }
//     });
// });

let draggedTask = null;

// Enable drag for a task
function enableDrag(task) {
    task.addEventListener("dragstart", function () {
        draggedTask = task;
    });
}

// Add task function
function addTask(columnId) {

    const title = prompt("Enter Task Title");
    if (!title) return;

    const description = prompt("Enter Description");
    if (!description) return;

    const priority = prompt("Enter Priority (low, medium, urgent)");
    if (!priority) return;

    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("draggable", "true");

    task.innerHTML = `
        <h4>${title}</h4>
        <p>${description}</p>
        <div class="task-footer">
            <span class="badge ${priority}">
                ${priority}
            </span>
        </div>
    `;

    enableDrag(task);

    document.getElementById(columnId).appendChild(task);
}

// Drop zones
const containers = document.querySelectorAll(".task-container");

containers.forEach(function (container) {

    container.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    container.addEventListener("drop", function () {
        if (draggedTask) {
            container.appendChild(draggedTask);
        }
    });

});