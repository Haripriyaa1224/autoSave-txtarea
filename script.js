
let text=document.getElementById("textarea");

function saveToLocalStorage() {
    localStorage.setItem("savedText", text.value);
}

if (localStorage.getItem("savedText")) {
    textarea.value = localStorage.getItem("savedText");
}

textarea.addEventListener("input", saveToLocalStorage);