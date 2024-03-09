/*document
  .getElementById("darkModeBtn")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });*/

const form = document.getElementById('support-form');
const submitbtn = document.getElementById('submit-button');
const inputs = document.querySelectorAll('input[required], textarea[required]');
const errorMessages = document.querySelectorAll('.error');


submitbtn.addEventListener("click", function(event) {
    event.preventDefault();         // 기본 동작 방지

    checkInputs();
});

// 각 필수 입력 필드를 검사하고 비어 있는 경우 오류 메시지를 표시
function checkInputs() {
    inputs.forEach(input => {
        if(input.value.trim() === '') {
            const errorMessages = input.parentElement.querySelector('.error');
            errorMessages.style.display = 'block';
            input.style.bordercolor = 'red';             // 지금 이게 안됨
        } else if(input.value.trim() != '') {
            const errorMessages = input.parentElement.querySelector('.error');
            errorMessages.style.display = 'none';
            input.style.bordercolor = '#ccc';             
        }

        //if(isValid) {             // 얘도 언제 넘겨야 할지 모르겠어요ㅜㅠ
        //    form.submit();
        //    gonext();
        //}
    });
};

function gonext() {
    location.href = "../applySubmit.html";
}