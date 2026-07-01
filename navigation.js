// =========================
// LifeHub Navigation v1
// =========================

const SCREENS = {
    home: "screen-home",
    tasks: "tasks",
    habits: "habits",
    goals: "goals",
    stats: "stats"
};

function showScreen(name) {

    // Скрываем все экраны
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.add("hidden");
        screen.classList.remove("active");
    });

    // Показываем нужный
    const id = SCREENS[name];

    if (id) {

        const screen = document.getElementById(id);

        if (screen) {
            screen.classList.remove("hidden");
            screen.classList.add("active");
        }

    }

    // Подсветка нижнего меню
    document.querySelectorAll(".nav-btn").forEach(btn => {

        btn.classList.remove("active");

        if (btn.dataset.screen === name) {
            btn.classList.add("active");
        }

    });

}

function initNavigation() {

    document.querySelectorAll(".nav-btn").forEach(btn => {

        btn.onclick = () => {

            showScreen(btn.dataset.screen);

        };

    });

    // При запуске всегда открываем главный экран
    showScreen("home");

}
