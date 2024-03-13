// input가 공백일 때
function showBlank(questionInput) {
  questionInput.css("border", "1px solid red");

  const alert = Swal.mixin({
    toast: true,
    width: 300,
    background: "#ff0000",
    showConfirmButton: false,
    timer: 3500,
    customClass: {
      title: "showAlert-title",
    },
  });

  alert.fire({
    title: "질문을 입력해주세요.",
  });
}

// 공백이 없을 때
function showAlert(questionInput) {
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
    title: "질문이 등록되었습니다!",
  });
  questionInput.val(""); // 입력란의 값을 비워줍니다.
}