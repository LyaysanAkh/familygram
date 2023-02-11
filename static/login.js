let loginImg = document.querySelector('.login-img');
let passwordForm = document.querySelector('.password-form');

loginImg.onclick = function() {
    if (passwordForm.style.display === "none") {
    passwordForm.style.display = "block";
    } else if (passwordForm.style.display !== "none") {
        passwordForm.style.display = "none";
    }
};
