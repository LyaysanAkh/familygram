let loginImg = document.querySelector('.login-img');
let passwordForm = document.querySelector('.password-form');
let password = document.querySelector('.password');
let showPassword = document.querySelector('.show-password');

loginImg.onclick = function() {
    if (passwordForm.style.display === "none") {
        passwordForm.style.display = "block";
    } else {
        passwordForm.style.display = "none";
    }
};

showPassword.onchange = function() {
    if (showPassword.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
};
