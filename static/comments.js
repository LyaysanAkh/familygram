let commentList = document.querySelectorAll('.comment-list');
let commentField = document.querySelectorAll('.comment-field');
let commentForm = document.querySelectorAll('.comment-form');

for (let i=0; ;i++) {
    commentForm[i].onsubmit = function (evt) {
        evt.preventDefault();

        let newComment = document.createElement('li');
        newComment.classList.add('user-comment');
        newComment.textContent = commentField[i].value;
        commentField[i].value = '';
        commentList[i].append(newComment);
}
}
