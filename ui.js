// =========================
// LifeHub UI
// =========================

function updateProgress() {

    const tasks = getTasks();

    const done = tasks.filter(task => task.done).length;

    const percent =
        tasks.length === 0
            ? 0
            : Math.round(done / tasks.length * 100);

    progressFill.style.width = percent + "%";

    progressText.textContent =
        `${done} из ${tasks.length} • ${percent}%`;

}

function renderTasks() {

    const tasks = getTasks();

    taskList.innerHTML = "";

    const search =
        searchInput
            ? searchInput.value.toLowerCase()
            : "";

    const filtered = tasks.filter(task => {

        if (!search) return true;

        return task.text
            .toLowerCase()
            .includes(search);

    });

    if (filtered.length === 0) {

        taskList.innerHTML = `
<div class="empty fade">

Нет задач 📋

</div>
`;

        updateProgress();

        return;

    }

    filtered.forEach(task => {

        const item =
            document.createElement("div");

        item.className =
            "task fade";

        item.innerHTML = `

<label class="taskLabel">

<input
type="checkbox"
${task.done ? "checked" : ""}
>

<span class="taskText
${task.done ? "done" : ""}">

${task.text}

</span>

</label>

<button
class="deleteButton">

🗑️

</button>

`;

        const checkbox =
            item.querySelector("input");

        checkbox.onchange = () => {

            toggleTask(task.id);

            renderTasks();

        };

        item
            .querySelector(".deleteButton")
            .onclick = () => {

                if (
                    confirm(
                        "Удалить задачу?"
                    )
                ) {

                    removeTask(task.id);

                    renderTasks();

                }

            };

        taskList.appendChild(item);

    });

    updateProgress();

}
