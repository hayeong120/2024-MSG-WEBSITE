var question = document.getElementById('question-input');
var countDisplay = document.getElementById('p');
var count = 1;
var answerCount = document.getElementById('count');
var outputElement = document.getElementById('questionContainer');
var answer = document.getElementById('answerInput');

//질문 폼 생성
function submitForm(event) {
    if (event) {
        event.preventDefault();
    }
    // showBlank();
}
//input 박스 질문 입력
function submitKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        showBlank();
    }
}
//공백 확인
question.addEventListener('focus', function () {
    question.style.border = '';
});
// input가 공백일 때
function showBlank() {
    if (question.value.trim() === '') {
        question.style.border = '1px solid red';

        const alert = Swal.mixin({
            toast: true,
            width: 300,
            background: "#ff0000",
            showConfirmButton: false,
            timer: 3500,
            customClass: {
                title: 'showAlert-title'
            }
        });
        alert.fire({
            title: '질문을 입력해주세요.',
        });
    } 
    else 
        showAlert();
}
$(document).rea

// 공백이 없을 때
function showAlert() {
    countDisplay.innerHTML = count;
    add();

    var questionNumber = count;
    var questionHtml = '<div>' + (questionNumber - 2 + 1) + '.  ' + question.value + '</div>';

    var questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = questionHtml + questionContainer.innerHTML;

    var questionImage = document.getElementById("questionContainer");
    questionImage.style.display = 'block';

    const alert = Swal.mixin({
        toast: true,
        width: 300,
        background: "#464D57",
        showConfirmButton: false,
        timer: 3500,
        customClass: {
            title: 'showAlert-title'
        }
    });
    alert.fire({
        title: '질문이 등록되었습니다!'
    });
    question.value = ''; 
}

function submitAnswer(questionId) {
    // 무조건 createElement로 변경
    var answerContainer = document.createElement("submitAnswerBtn_" + questionId);
    answerContainer.innerHTML = answerContainer;
    // input 값 저장

    // var answerCountElement = document.getElementById("answer_count_" + questionId);
    if (answerContainer) {
        // answerContainer.innerText = "1"; // 1개의 답변이 등록되었습니다.
            const alert = Swal.mixin({
            toast: true,
            width: 300,
            background: "#464D57",
            showConfirmButton: false,
            timer: 3500,
            customClass: {
                title: 'showAlert-title'
            }
        });
        alert.fire({
            title: '답변이 등록되었습니다!'
        });
        document.getElementById("submitAnswerBtn").style.display = "none";

    }
}
    /*수정사항
    - 질문답변창을 요소로 만들어서 질문을 추가할때마다
    질문답변창이 뜨게 만들어야함.
    - 답변제출 버튼을 누르면 답변 저장과 답변input을 누를때 변경 못하게 비활성화 하기 
    - 다크모드와 반응형 */

// 질문 등록 후 응답 폼 생성 및 표시
var questionId = count;

var add = function () {
    count += 1;
};
/*darkMode*/