import closeInput from "./closeInput.js";
import openInput from "./openInput.js";

const btnMobile = document.querySelector(".search-icon");
let inputIsOpen = false;

btnMobile.addEventListener("click", ()=> {
    if(!inputIsOpen) {
        openInput();
        inputIsOpen = true;
    } else {
        closeInput();
        inputIsOpen = false;
    }
});