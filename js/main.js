const menuIcon = document.getElementById("menuIcon");
const element = document.body;
const modeIcon = document.getElementById("modeIcon");
const topbar=document.getElementById("top-bar");
const menubar=document.getElementById("menu");
const repeatDiv = document.getElementById("repeatDiv");
const repeatCheckbox = document.getElementById("repeatCheckbox");
const cancel = document.getElementById("cancel");

function toggleDarkMode() {
    modeIcon.classList.toggle("fa-moon");
    topbar.classList.toggle("dark-mode");
    menubar.classList.toggle("dark-mode");
    element.classList.toggle("dark-mode");
}

menuIcon.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("d-none");
    const element = document.querySelector(".base-timer__label")
    element.classList.toggle("phone");
});


repeatCheckbox.addEventListener("change", function () {
    if (repeatCheckbox.checked) {
        repeatDiv.classList.remove("d-none");
    } else {
        repeatDiv.classList.add("d-none");
    }
});

cancel.addEventListener("click", () => {
    repeatCheckbox.checked = false;
    repeatDiv.classList.add("d-none");
});