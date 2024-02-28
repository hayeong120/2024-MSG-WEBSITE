// const mouse = document.querySelector('.mouse-shapes');


// document.addEventListener('mousemove',function(e){
//   position(e.pageX, e.pageY);
// });

// function position(pageX, pageY){
//   mouse.style.left = pageX + "px";
//   mouse.style.top = pageY+ "px";
// }


// document.addEventListener("DOMContentLoaded", function() {
//   var keywords = document.querySelectorAll(".tutorial-page .keyword");
//   var windowHeight = window.innerHeight || document.documentElement.clientHeight;
//   var halfwayPoint = windowHeight * 0.5; // 뷰포트 높이의 50% 위치 계산

//   function revealKeywords() {
//       keywords.forEach(function(keyword, index) {
//           setTimeout(function() {
//               keyword.style.opacity = 1;
//               keyword.style.transform = "translateY(0)";
//           }, index * 100); // 각 키워드가 나타나는 시간 간격
//       });
//   }

//   function scrollHandler() {
//       var tutorialPage = document.querySelector(".tutorial-page");
//       var rect = tutorialPage.getBoundingClientRect();
      
//       // 페이지가 뷰포트의 50% 이상 올라오면 키워드를 나타냅니다.
//       if (rect.top <= halfwayPoint) {
//           revealKeywords();
//           // 스크롤 이벤트 리스너를 제거합니다.
//           window.removeEventListener("scroll", scrollHandler);
//       }
//   }

//   window.addEventListener("scroll", scrollHandler);
// });


$(window).scroll(function () { //화면이 스크롤 될때마다 내부코드를 실행해주세요~
  var height = $(window).scrollTop();
  console.log(height);

  //650~1150까지 스크롤바를 내리면,첫째카드의 opacity 1~0으로 서서히 바뀜
  // y = ax + b(일차함수 형태), 대입법으로 a와 b를 구함
  var y = (-1 / 500) * height + 1150 / 50;
  $('.wrapper>.container>.main-page').eq(0).css('opacity', y);

  //650~1150까지 스크롤바를 내리면, 카드의 크기가 1에서 0.9로 작아짐
  //y = ax +b 일차함수에서 (650,1)과 (1150,0.9)를 동시에 지나는 식을쓰자

  var z = (-1 / 5000) * height + 565 / 500;
  $('.wrapper>.container>.main-page').eq(0).css('transform', `scale(${z})`);
  
});

// $(window).scroll(function () { //화면이 스크롤 될때마다 내부코드를 실행해주세요~
//   var height = $(window).scrollTop();
//   console.log(height);

//   //650~1150까지 스크롤바를 내리면,첫째카드의 opacity 1~0으로 서서히 바뀜
//   // y = ax + b(일차함수 형태), 대입법으로 a와 b를 구함
//   var y = (-1 / 500) * height + 5150 / 50;
//   $('.wrapper>.tutorial-page>.container').eq(0).css('opacity', y);
  

//   //650~1150까지 스크롤바를 내리면, 카드의 크기가 1에서 0.9로 작아짐
//   //y = ax +b 일차함수에서 (650,1)과 (1150,0.9)를 동시에 지나는 식을쓰자

//   var z = (-1 / 5000) * height + 565 / 500;
//   $('.wrapper>.tutorial-page>.container').eq(0).css('transform', `scale(${z})`);

// });