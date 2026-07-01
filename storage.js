// =========================
// LifeHub Storage
// =========================

const STORAGE = {
    TASKS: "lifehub_tasks"
};

function loadTasks() {

    const data = localStorage.getItem(STORAGE.TASKS);

    if (!data) {
        return [...DEFAULT_TASKS];
    }

    return JSON.parse(data);

}

function saveTasks(tasks) {

    localStorage.setItem(
        STORAGE.TASKS,
        JSON.stringify(tasks)
    );

}
