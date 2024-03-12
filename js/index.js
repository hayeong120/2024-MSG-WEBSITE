// keyword 가운데로 모이는 효과 
const options = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: .5,  // 50%가 viewport에 들어와 있어야 callback 실행
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, options);

const titleList = document.querySelectorAll('.keyword');

// 반복문을 돌려 모든 DOM에 적용
titleList.forEach(el => observer.observe(el));


// 각 페이지 효과
// const pageOptions = {
//   root: null, // viewport
//   rootMargin: "0px",
//   threshold: 1.0,  // 50%가 viewport에 들어와 있어야 callback 실행
// }

// const pageObserver = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');
//     } else {
//       entry.target.classList.remove('active');
//     }
//   });
// }, pageOptions);

// const boxList = document.querySelectorAll('.wrapper');

// // 반복문을 돌려 모든 DOM에 적용
// boxList.forEach(el => pageObserver.observe(el));

// // 한 페이지씩 이동
// var $html = $("html");

// var page = 1;

// var lastPage = 7;

// $html.animate({scrollTop:0},10);
// $(window).on("wheel", function(e){

// 	if($html.is(":animated")) return;

// 	if(e.originalEvent.deltaY > 0){
// 		if(page== lastPage) return;

// 		page++;
// 	}else if(e.originalEvent.deltaY < 0){
// 		if(page == 1) return;

// 		page--;
// 	}
// 	var posTop = (page-1) * $(window).height();

// 	$html.animate({scrollTop : posTop});

// });
// $(document).ready(function() {
//   $('#fullpage').fullpage({
//       //options here
//       autoScrolling:true,
//       scrollHorizontally: true
//   });

//   //methods
//   $.fn.fullpage.setAllowScrolling(false);
// });

// 다크 모드 토글 버튼 클릭 이벤트 핸들러
document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
  