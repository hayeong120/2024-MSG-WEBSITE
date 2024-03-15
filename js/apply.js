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
    let allChecked = true; // 모든 필드가 유효한지 여부를 나타내는 변수
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            showAlert(input, "필수 항목을 입력해주세요.");
            const errorMessages = input.parentElement.querySelector('.error');
            errorMessages.style.display = 'block';
            input.style.color = '';
            console.log("공백있음");
            allChecked = false; // 하나라도 비어 있는 필드가 있으면 false로 설정
        } else if (input.id === 'class-number') {
            const studentId = input.value;
            if (studentId.length !== 4 || isNaN(Number(studentId))) {
                showAlert(input, "학번을 다시 입력해주세요.");
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'block';
                input.style.color = '';
                errorMessages.textContent = "4글자 숫자로만 입력해주세요.";
                console.log("학번", studentId);
                allChecked = false; // 유효하지 않은 학번이 있으면 false로 설정
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
                console.log("전화번호");
                allChecked = false; // 유효하지 않은 전화번호가 있으면 false로 설정
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
                console.log("이메일");
                allChecked = false; // 유효하지 않은 이메일이 있으면 false로 설정
            }else {
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'none';
                input.style.bordercolor = '#ccc';
            }
        } else if (input.id === 'motive' || input.id === 'strength' || input.id === 'experience') {
            const value = input.value;
            if (value.length > 500) {
                const fieldName = input.id === 'motive' ? '지원동기' : input.id === 'strength' ? '자신의 장점' : '실패했던 경험';
                showAlert(input, `${fieldName}을(를) 다시 입력해주세요.`);
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'block';
                input.style.color = '';
                errorMessages.textContent = "공백 포함 500자 이내로 입력해주세요.";
                console.log(fieldName+" "+value.length);
                allChecked = false; // 유효하지 않은 값이 있으면 false로 설정
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
                console.log("한마디"+ definition.length);
                allChecked = false; // 유효하지 않은 한 마디가 있으면 false로 설정
            } else {
                const errorMessages = input.parentElement.querySelector('.error');
                errorMessages.style.display = 'none';
                input.style.bordercolor = '#ccc';
            }
        }
    });
    if (allChecked) {
        // 모든 필드가 유효한 경우
        console.log("지원제출 성공");
        apply(); // apply 함수 호출
    } else {
        console.log("지원제출 실패");
        return 0;
    }
}


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

function apply() {
    let name = $('#username').val();
    let studentId = $('#class-number').val();
    let tel = $('#phone').val();
    let email = $('#mail').val();
    let purpose = $('#motive').val();
    let strengths = $('#strength').val();
    let failure = $('#experience').val();
    let definition = $('#definition').val();
    let question = $('#question').val();

    console.log(definition.length+" 왜안돼ㅜㅜㅜㅜ");

    let param = {
        "name": name,
        "studentId": studentId,
        "tel": tel,
        "email": email,
        "purpose": purpose,
        "strengths": strengths,
        "failure": failure,
        "definition": definition,
        "question": question
    };
    console.log("성공");
    $.ajax({
        type: 'post',           // 타입 (get, post, put 등등)
        url: `http://210.114.18.202:8081/support-form`,           // 요청할 서버url
        async: true,            // 비동기화 여부 (default : true)
        dataType: 'json',       // 데이터 타입 (html, xml, json, text 등등)
        data: JSON.stringify(param),
        contentType: "application/json",
        success: async function (data) { // 결과 성공 콜백함수
            gonext();
        }
    });
}