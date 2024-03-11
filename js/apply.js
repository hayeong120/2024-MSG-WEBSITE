/*document
  .getElementById("darkModeBtn")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });*/

const form = document.getElementById('support-form');
const submitbtn = document.getElementById('submit-button');
const inputs = document.querySelectorAll('input[required], textarea[required]');
const errorMessages = document.querySelectorAll('.error');


submitbtn.addEventListener("click", function (event) {
    event.preventDefault();         // 기본 동작 방지

    checkInputs();
});

// 각 필수 입력 필드를 검사하고 비어 있는 경우 오류 메시지를 표시
function checkInputs() {
    let name = $('#username').val();
    let studentId = $('#class-number').val();
    let tel = $('#phone').val();
    let email = $('#mail').val();
    let purpose = $('#motive').val();
    let strengths = $('#strength').val();
    let failure = $('#experience').val();
    let definition = $('#definition').val();
    let question = $('#question').val();


    inputs.forEach(input => {
        console.log(input);
        if (input.value.trim() === '') {
            const errorMessages = input.parentElement.querySelector('.error');
            errorMessages.style.display = 'block';
            input.style.color = '';
        } else {
            const errorMessages = input.parentElement.querySelector('.error');
            errorMessages.style.display = 'none';
            input.style.bordercolor = '#ccc';
        }

    });
    if (studentId.length !== 4) {
        console.log("학번이 4글자가 아닙니다.");
        const errorMessages = studentId.parentElement.querySelector('.wrong');
        errorMessages.style.display = 'block';
        input.style.bordercolor = 'black';             // 지금 이게 안됨
        input.style.color = 'black';
    }

};

function gonext() {
    location.href = "../applySubmit.html";
}