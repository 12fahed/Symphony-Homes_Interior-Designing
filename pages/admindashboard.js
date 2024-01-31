// window.addEventListener("load", () => {

// });

let save=document.querySelector("#save-btn");
save.addEventListener("click", saveText);

function saveText() {
    let title = document.querySelector("#title").value;
    let thought = document.querySelector("#thought").value;

    // Save values to localStorage
    localStorage.setItem("savedTitle", title);
    localStorage.setItem("savedThought", thought);
}

// Function to load saved text values on page load
function loadSavedText() {
    let savedTitle = localStorage.getItem("savedTitle");
    let savedThought = localStorage.getItem("savedThought");

    // Check if values are present in localStorage
    if (savedTitle !== null) {
        document.querySelector("#title").value = savedTitle;
    }

    if (savedThought !== null) {
        document.querySelector("#thought").value = savedThought;
    }
}

// Load saved text values on page load
loadSavedText();





