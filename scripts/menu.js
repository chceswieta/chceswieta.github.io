function checkHamburgerConditions(icon, navList) {
    icon.classList.remove("is-active");
    navList.classList.remove("js-hidden");

    if (window.innerWidth <= 650) {
        icon.style.display = "block";
        navList.classList.add("js-hidden");
    } else {
        icon.style.display = "none";
    }
}

document.querySelectorAll(".js").forEach((element, _key, _parent) => {
    element.classList.remove("js");
});

let icon = document.querySelector("#js-hamburger-icon");
let navList = icon.parentNode.querySelector(".js-menu-items");

icon.style.display = "block";
icon.addEventListener("click", (_event) => {
    icon.classList.toggle("is-active");
    navList.classList.toggle("js-hidden");
});

checkHamburgerConditions(icon, navList);
window.matchMedia("(max-width: 650px)")
    .addEventListener("change", () => checkHamburgerConditions(icon, navList));