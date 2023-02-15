let upButton = document.querySelector('.up-button');
let logo = document.querySelector('.logo');

window.onscroll = function() {
    if (window.pageYOffset > 1000) {
        upButton.classList.add('shown');
    } else {
        upButton.classList.remove('shown');
    }
}

upButton.onclick = function() {
    window.scrollTo(0, 0);
}

logo.onclick = function() {
    window.location.reload();
}