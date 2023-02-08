let upButton = document.querySelector('.up-button');

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

header.onclick = function() {
    window.location.reload();
}
