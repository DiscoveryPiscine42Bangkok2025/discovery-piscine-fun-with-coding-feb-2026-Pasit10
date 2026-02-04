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

    const task = createTask(taskText)

    const list = document.getElementById('ft_list');
    list.insertBefore(task, list.firstChild);

    if (save) saveTasks();
}

function createNewTask() {
    const taskText = prompt('Enter a new TO DO:');
    if (taskText) addTask(taskText);
}

function createTask(taskText){
    const task = document.createElement('div');
    task.className = 'task';
    task.textContent = taskText;

    task.addEventListener('click', function () {
        if (confirm('Do you want to remove this TO DO?')) {
            task.remove();
            saveTasks();
        }
    });

    return task
}

function saveTasks() {
    const tasks = Array.from(document.querySelectorAll('.task')).map(task => task.textContent);
    saveCookies(tasks);
}

function loadTasks(){
    const taskList = getCookies()
    const list = document.getElementById('ft_list');
    taskList.forEach(element => {
        const task = createTask(element)
        list.appendChild(task);
    });
}

document.getElementById('newTaskBtn').addEventListener('click', createNewTask);

window.onload = loadTasks;