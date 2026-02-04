// Function to get cookies
function getCookies() {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'tasks') {
            return JSON.parse(decodeURIComponent(value));
        }
    }
    return [];
}

function saveCookies(tasks) {
    document.cookie = `tasks=${encodeURIComponent(JSON.stringify(tasks))}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

function addTask(taskText, save = true) {
    if (!taskText) return;

    const $task = $("<div>").addClass("task").text(taskText);

    $task.click(function () {
        if (confirm("Do you want to remove this TO DO?")) {
            $(this).remove();
            saveTasks();
        }
    });

    $("#ft_list").prepend($task);

    if (save) saveTasks();
}

function createNewTask() {
    const taskText = prompt("Enter a new TO DO:");
    if (taskText) addTask(taskText);
}

function saveTasks() {
    const tasks = $(".task").map(function () {
        return $(this).text();
    }).get();
    saveCookies(tasks);
}

$(document).ready(function () {
    $("#newTaskBtn").click(createNewTask);
    loadTasks();
});

function loadTasks() {
    const tasks = getCookies().reverse();
    tasks.forEach(task => addTask(task, false));
}
