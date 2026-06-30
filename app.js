// =========================
// LifeHub v2
// Основной файл
// =========================

const greeting = document.getElementById("greeting");
const todayDate = document.getElementById("todayDate");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const weekLeft = document.getElementById("weekLeft");
const monthLeft = document.getElementById("monthLeft");
const yearLeft = document.getElementById("yearLeft");

const taskList = document.getElementById("taskList");
const addButton = document.getElementById("addButton");

let tasks = JSON.parse(
    localStorage.getItem(STORAGE.TASKS)
);

if(!tasks){
    tasks = [...DEFAULT_TASKS];
}

function saveTasks(){

    localStorage.setItem(
        STORAGE.TASKS,
        JSON.stringify(tasks)
    );

}

function updateGreeting(){

    const hour = new Date().getHours();

    if(hour < 12){

        greeting.textContent =
            "Доброе утро 👋";

    }else if(hour < 18){

        greeting.textContent =
            "Добрый день 👋";

    }else{

        greeting.textContent =
            "Добрый вечер 👋";

    }

}

function updateDate(){

    const now = new Date();

    todayDate.textContent =
        now.toLocaleDateString(
            "ru-RU",
            {
                weekday:"long",
                day:"numeric",
                month:"long",
                year:"numeric"
            }
        );

}

function updateCountdown(){

    const now = new Date();

    const weekDay =
        (now.getDay()+6)%7+1;

    weekLeft.textContent =
        `Осталось ${7-weekDay} из 7`;

    const daysInMonth =
        new Date(
            now.getFullYear(),
            now.getMonth()+1,
            0
        ).getDate();

    monthLeft.textContent =
        `Осталось ${
            daysInMonth-now.getDate()
        } из ${daysInMonth}`;

    const start =
        new Date(
            now.getFullYear(),
            0,
            1
        );

    const day =
        Math.floor(
            (now-start)/86400000
        )+1;

    yearLeft.textContent =
        `Осталось ${365-day} из 365`;

}function renderTasks(){

    taskList.innerHTML = "";

    let done = 0;

    tasks.forEach((task,index)=>{

        if(task.done) done++;

        const item =
            document.createElement("div");

        item.className = "task fade";

        item.innerHTML = `
<label style="display:flex;align-items:center;gap:12px;">
<input type="checkbox"
${task.done ? "checked":""}>
<span style="
flex:1;
${task.done ? "text-decoration:line-through;color:#8fb7a3;" : ""}
">${task.text}</span>
</label>
`;

        const checkbox =
            item.querySelector("input");

        checkbox.onchange = function(){

            tasks[index].done =
                this.checked;

            saveTasks();

            renderTasks();

        };

        taskList.appendChild(item);

    });

    updateProgress();

}

function updateProgress(){

    let done =
        tasks.filter(t=>t.done).length;

    let percent =
        tasks.length===0
        ?0
        :Math.round(done/tasks.length*100);

    progressFill.style.width =
        percent + "%";

    progressText.textContent =
        `${done} из ${tasks.length} · ${percent}%`;

}

addButton.onclick = function(){

    const text =
        prompt("Введите новую задачу");

    if(!text) return;

    tasks.push({

        id:Date.now(),

        text:text,

        done:false

    });

    saveTasks();

    renderTasks();

};// =========================
// Запуск приложения
// =========================

function init(){

    updateGreeting();

    updateDate();

    updateCountdown();

    renderTasks();

}

init();
