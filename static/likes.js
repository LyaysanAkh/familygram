let heart = document.querySelectorAll('.heart');
let likesNumber = document.querySelectorAll('.likes-number');

for (let i=0; ;i++) {
    heart[i].onclick = function() {
    if (heart[i].classList.contains('added')) {
    likesNumber[i].textContent--;
    } else {
    likesNumber[i].textContent++;
    }
    heart[i].classList.toggle('added');
    };
};
