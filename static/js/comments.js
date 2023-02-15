let commentList = document.querySelectorAll('.comment-list');
let commentField = document.querySelectorAll('.comment-field');
let commentForm = document.querySelectorAll('.comment-form');
let button = document.querySelectorAll('.button');
let charCounter = document.querySelectorAll('.char-counter');

for (let i=0;i<commentForm.length;i++) {
    commentForm[i].onsubmit = function (evt) {
        evt.preventDefault();
        let newComment = document.createElement('li');
        newComment.classList.add('user-comment');
        newComment.textContent = commentField[i].value; 
        commentField[i].value = '';
        commentList[i].append(newComment);
        commentList[i].classList.add('scroll-visible');
        charCounter[i].textContent = 0;
    }

    commentField[i].oninput = function() {
        charCounter[i].textContent = commentField[i].value.length;
        if (commentField[i].value.length > 100) {
        charCounter[i].classList.add('warning');
        button[i].disabled = true;
        } else {
        charCounter[i].classList.remove('warning');
        button[i].disabled = false;
        }
    }
}