const submittedAnswer = document.getElementById('submitAnswer');

submitAnswer.addEventListener('click',(e) => {
    // let userAnswer = document.getElementById('userAnswer');
    // console.log(userAnswer.value);
    // submitAnswer.parentElement(userAnswer.value)
    submittedAnswer.style.display='none';
    submittedAnswer.remove();
});
