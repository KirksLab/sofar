const bodyHtml = document.getElementById("bodyHtml");
const sectionCaution = document.getElementById("sectionCaution");
const callContact = document.getElementById("contact");
const exitButton = document.getElementById("exit");

function warnReader () {
    sectionCaution.style.display = "flex";
    bodyHtml.style.overflow = "hidden";
}

function goodBye () {
    window.close();
}

callContact.addEventListener("click", warnReader);
exitButton.addEventListener("click", goodBye);