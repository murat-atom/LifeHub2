// =========================
// LifeHub v2
// Константы приложения
// =========================

const APP = {
    name: "LifeHub",
    version: "2.0.0"
};

// Задачи по умолчанию
const DEFAULT_TASKS = [
    {
        id: 1,
        text: "Добро пожаловать в LifeHub 👋",
        done: false
    },
    {
        id: 2,
        text: "Создать первую задачу",
        done: false
    }
];

// Ключи LocalStorage
const STORAGE = {
    TASKS: "lifehub_tasks",
    SETTINGS: "lifehub_settings"
};
