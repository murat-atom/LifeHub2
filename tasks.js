// =========================
// LifeHub Tasks
// =========================

let tasks = loadTasks();

function addTask(text) {

    tasks.push({
        id: Date.now(),
        text: text.trim(),
        done: false
    });

    saveTasks(tasks);

}

function removeTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    saveTasks(tasks);

}

function toggleTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {
            task.done = !task.done;
        }

        return task;

    });

    saveTasks(tasks);

}

function getTasks() {

    return tasks;

}
