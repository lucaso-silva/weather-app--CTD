export default function closeInput() {
    const header = document.querySelector(".header");
    const logo = document.querySelector(".logo");
    const inputContainer = document.querySelector(".container-input");
    const searchIcon = document.querySelector(".search-icon");

    header.classList.remove("header-mobile--open");
    logo.classList.remove("logo-mobile--open");
    inputContainer.classList.remove("container-input--mobile");
    searchIcon.classList.remove("search-icon--mobile");
}