

document.addEventListener("DOMContentLoaded", function() {
    

// -----------------------------------------1--------------------------------------------------

const paragraph = document.querySelector(".paragraph");
const words = paragraph.textContent.split(" ");

for (const word of words) {
    if (word.length > 8) {
        const span = document.createElement("span");
        span.classList.add("highlighted-word"); 
        span.textContent = word;
        const regex = new RegExp(`\\b${word}\\b`, "g");
        paragraph.innerHTML = paragraph.innerHTML.replace(regex, span.outerHTML);
    }
}



// ----------------------------------------2----------------------------------------------------

const sourceLink = document.createElement("a");
sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
sourceLink.textContent = "Source";
paragraph.insertAdjacentElement("afterend", sourceLink);

// ----------------------------------------3----------------------------------------------------

const sentences = paragraph.textContent.split(". ");
const newParagraph = document.createElement("p");
newParagraph.innerHTML = sentences.join(".<br>");
paragraph.parentNode.replaceChild(newParagraph, paragraph);

// ----------------------------------------4----------------------------------------------------

const wordCount = words.length;
const heading = document.querySelector("h2");
heading.insertAdjacentHTML("afterend", `<p>Word Count: ${wordCount}</p>`);

// ----------------------------------------5----------------------------------------------------

const replacedText = newParagraph.innerHTML.replace(/\?/g, '&#129300;').replace(/\!/g, '&#128562;');
newParagraph.innerHTML = replacedText;


});


//------------------------------------DOM PRACTICE 2 FORM ---------------------------------------

const registrationForm = document.getElementById("registrationForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const registerButton = document.getElementById("registerButton");
const successMessage = document.getElementById("successMessage");

registrationForm.addEventListener("input", function () {
    if (username.validity.valid && password.validity.valid && confirmPassword.validity.valid && password.value === confirmPassword.value) {
        registerButton.removeAttribute("disabled");
    } else {
        registerButton.setAttribute("disabled", "true");
    }
});

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    successMessage.style.display = "block";
});
