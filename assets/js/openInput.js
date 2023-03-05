export default function openInput() {
    const header = document.querySelector(".header");
    const logo = document.querySelector(".logo");
    const inputContainer = document.querySelector(".container-input");
    const searchIcon = document.querySelector(".search-icon");

    header.classList.add("header-mobile--open");
    logo.classList.add("logo-mobile--open");
    inputContainer.classList.add("container-input--mobile");
    searchIcon.classList.add("search-icon--mobile");
}