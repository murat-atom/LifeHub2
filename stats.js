// =========================
// LifeHub Statistics
// =========================

function getStats() {

    const tasks = getTasks();

    const total = tasks.length;

    const completed = tasks.filter(task => task.done).length;

    const active = total - completed;

    const percent = total === 0
        ? 0
        : Math.round(completed / total * 100);

    return {

        total,

        completed,

        active,

        percent

    };

}

function getCompletedCount() {

    return getStats().completed;

}

function getTotalCount() {

    return getStats().total;

}

function getProgressPercent() {

    return getStats().percent;

}

function allTasksCompleted() {

    const stats = getStats();

    return stats.total > 0 &&
           stats.completed === stats.total;

}
