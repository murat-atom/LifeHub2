// =========================
// LifeHub Navigation
// =========================

function showScreen(screenName) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.add("hidden");

    });

    const current = document.getElementById(screenName);

    if (current) {

        current.classList.remove("hidden");

    }

    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(button => {

        button.classList.remove("active");

        if (button.dataset.screen === screenName) {

            button.classList.add("active");

        }

    });

}

function initNavigation() {

    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(button => {

        button.onclick = function () {

            showScreen(this.dataset.screen);

        };

    });

}
