const bodyHtml = document.getElementById("bodyHtml");
const listButton = document.getElementById("listButton");
const sectionCaution = document.getElementById("sectionCaution");
const callContact = document.getElementById("contact");
const exitButton = document.getElementById("exit");
const buttonCloseNav = document.getElementById("closeMobileNav");
const MobileNavHtml = document.getElementById("sectionMobileNav");
const callContactMobile = document.getElementById("contactMobile");

function showMobileNav () {
    MobileNavHtml.style.display = "flex";
    bodyHtml.style.overflow = "hidden";
}

function closeMobileNav () {
    MobileNavHtml.style.display = "none";
    bodyHtml.style.overflow = "scroll";
}

function warnReader () {
    sectionCaution.style.display = "flex";
    bodyHtml.style.overflow = "hidden";
}

function goodBye () {
    window.close();
}

listButton.addEventListener("click", showMobileNav);
callContact.addEventListener("click", warnReader);
buttonCloseNav.addEventListener("click", closeMobileNav);
exitButton.addEventListener("click", goodBye);
callContactMobile.addEventListener("click", warnReader);