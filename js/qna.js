function submitForm(event) {
    if (event) {
        event.preventDefault();
    }
    showBlank();
}

function submitKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        showBlank();
    }
}

var question = document.getElementById('question');
var countDisplay = document.getElementById('p');
var outputElement = document.getElementById('output');
var count = 1;
var answerCount = document.getElementById('count');

//공백 확인
question.addEventListener('focus', function () {
    question.style.border = '';
});

// 공백이 있을 때
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
    outputElement.innerHTML = questionHtml + outputElement.innerHTML;

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
    question.value = ''
;}

var add = function () {
    count += 1;
};
