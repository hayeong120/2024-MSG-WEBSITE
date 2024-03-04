var question = document.getElementById('question-input');
var countDisplay = document.getElementById('p');
var count = 1;
var answerCount = document.getElementById('count');
var outputElement = document.getElementById('questionContainer');

//질문 폼 생성
function submitForm(event) {
    if (event) {
        event.preventDefault();
    }
    showBlank();
}
//input 박스 질문 입력
function submitKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        showBlank();
    }
}
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
    } else {
        showAlert();
    }
}

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

    // //백틱 함수 사용
    // let show = $("#button").val();
    // console.log(show);


    // let item = `
    // <div class="question-and-answer" id="questionContainer"> 
    //     <div id="textAnswer">
    //         <p id="answer_count"></p>
    //         <p id="user_question"></p>
    //         <img src="./image/qna/Line 33.svg" id="line"><br>
            
    //         <img src="./image/qna/Vector.svg" id="vector">
    //         <div id="answerForm">
    //             <textarea id="answerInput" placeholder="답변 준비 중입니다." style="background-color: transparent;"></textarea>
    //             <button id="submitAnswerBtn" onclick="submitAnswer(questionId)">답변 제출</button>
    //         </div>
    //     </div>
    // </div> `
    // $("#answerForm").append(item);
    // $("#question-input").val('');


    // // 답변 폼 질문 아래 추가
    // var answerForm = document.getElementById("answerForm_" + questionId);
    // outputElement.appendChild(answerForm);

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

function createResponseForm(questionId) {
    var answerForm = document.createElement("div");
    answerForm.id = "answerForm_" + questionId;
    answerForm.style.display = "none";

    var inputText = document.createElement("input");
    inputText.id = "answerInput_" + questionId;
    inputText.placeholder = "답변 준비 중입니다.";

    var submitButton = document.createElement("button");
    submitButton.textContent = "답변 제출";
    submitButton.onclick = function () {
        submitForm(questionId);
    };

    answerForm.appendChild(inputText);
    answerForm.appendChild(submitButton);

    return answerForm;
}

// function showResponseForm(questionId) {
//     var answerForm = document.getElementById("answerForm_" + questionId);
//     answerForm.style.display = "block";
// }

function submitAnswer(questionId) {
    var answerInput = document.getElementById("answerInput_" + questionId);
    var answerText = answerInput.value;
    var answerHtml = '<div class="answer-item">' + answerText + '</div>';

    // 수정: 답변이 등록된 질문을 감춤
    var textAnswerElement = document.getElementById("textAnswer_" + questionId);
    textAnswerElement.display = "none";

    var answerContainer = document.getElementById("answerForm_" + questionId);
    answerContainer.innerHTML = answerHtml;

    // 수정: 답변이 등록되었음을 표시
    var answerCountElement = document.getElementById("answer_count_" + questionId);
    if (answerCountElement) {
        answerCountElement.innerText = "1"; // 1개의 답변이 등록되었습니다.
    } else {
        console.error("Answer count element not found for questionId:", questionId);
    }

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
}


//공백 확인
question.addEventListener('focus', function () {
    question.style.border = '';
});

// 질문 등록 후 응답 폼 생성 및 표시
var questionId = count;
var responseForm = createResponseForm(questionId);
outputElement.appendChild(responseForm);

 
var add = function () {
    count += 1;
};
/*darkMode*/