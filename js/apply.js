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
    // let name = $('#username').val();
    // let studentId = $('#class-number').val();
    // let tel = $('#phone').val();
    // let email = $('#mail').val();
    // let purpose = $('#motive').val();
    // let strengths = $('#strength').val();
    // let failure = $('#experience').val();
    // let definition = $('#definition').val();
    // let question = $('#question').val();

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            showAlert(input, "필수 항목을 입력해주세요.");
            const errorMessages = input.parentElement.querySelector('.error');
            errorMessages.style.display = 'block';
            input.style.color = '';
            return;
        }
        else if (input.id === 'class-number') {
            const studentId = input.value;
            if (isNaN(parseInt(studentId)) || studentId.length !== 4) {
                showAlert(input, "학번을 다시 입력해주세요.");
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'block';
                input.style.color = '';
                errorMessages.textContent = "4글자 숫자로만 입력해주세요.";
                return; // 학번이 유효하지 않으면 더 이상 진행하지 않고 함수를 종료합니다.
            }else {
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'none';
                input.style.bordercolor = '#ccc';
            }
        } else if (input.id === 'phone') {
            const tel = input.value;
            if (isNaN(Number(tel)) || tel.slice(0, 3) !== "010" || tel.length !== 11) {
                showAlert(input, "전화번호를 다시 입력해주세요.");
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'block';
                input.style.color = '';
                errorMessages.textContent = "올바른 형식의 숫자로만 입력해주세요.";
                return;
            }else {
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'none';
                input.style.bordercolor = '#ccc';
            }
        } else if (input.id === 'mail') {
            const email = input.value;
            if (email.length !== 19 || !email.includes('@e-mirim.hs.kr')) {
                showAlert(input, "이메일을 다시 입력해주세요.");
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'block';
                input.style.color = '';
                errorMessages.textContent = "학교 이메일을 입력해주세요.";
                return;
            }else {
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'none';
                input.style.bordercolor = '#ccc';
            }
        } else if (input.id === 'motive') {
            const motive = input.value;
            if (motive.length > 500) {
                showAlert(input, "지원동기를 다시 입력해주세요.");
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'block';
                input.style.color = '';
                errorMessages.textContent = "공백 포함 500자 이내로 입력해주세요.";
                return;
            }else {
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'none';
                input.style.bordercolor = '#ccc';
            }
        } else if (input.id === 'strength') {
            const strength = input.value;
            if (strength.length > 500) {
                showAlert(input, "자신의 장점을 다시 입력해주세요.");
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'block';
                input.style.color = '';
                errorMessages.textContent = "공백 포함 500자 이내로 입력해주세요.";
                return;
            }else {
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'none';
                input.style.bordercolor = '#ccc';
            }
        } else if (input.id === 'experience') {
            const failure = input.value;
            if (failure.length > 500) {
                showAlert(input, "실패했던 경험을 다시 입력해주세요.");
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'block';
                input.style.color = '';
                errorMessages.textContent = "공백 포함 500자 이내로 입력해주세요.";
                return;
            }else {
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'none';
                input.style.bordercolor = '#ccc';
            }
        } else if (input.id === 'definition') {
            const definition = input.value;
            if (definition.length > 20) {
                showAlert(input, "한 마디를 다시 입력해주세요.");
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'block';
                input.style.color = '';
                errorMessages.textContent = "공백 포함 20자 이내로 입력해주세요.";
                return;
            }else {
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'none';
                input.style.bordercolor = '#ccc';
            }
        }
        else {
            apply();
        }
    });
};

function gonext() {
    location.href = "../applySubmit.html";
}

function showAlert(questionInput, text) {
    const alert = Swal.mixin({
        toast: true,
        width: 300,
        background: "#464D57",
        showConfirmButton: false,
        timer: 3500,
        customClass: {
            title: "showAlert-title",
        },
    });
    alert.fire({
        title: text,
    });
    // questionInput.value = ""; // 입력란의 값을 비워줍니다.
}