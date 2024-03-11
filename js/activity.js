// 다크 모드 토글 버튼 클릭 이벤트 핸들러
// document
//   .getElementById("darkModeToggle")
//   .addEventListener("click", function () {
//     document.body.classList.toggle("dark-mode");
//   });

// swiper
document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    loop: false,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-prev",
      nextEl: ".swiper-next",
    },
    on: {
      slideChange: function () {
        var activeSlide = this.slides[this.activeIndex];
        var allSlides = this.slides;

        for (var i = 0; i < allSlides.length; i++) {
          allSlides[i].style.transform = "scale(1)";
        }

        activeSlide.style.transform = "scale(1.2)";
      },
    },
  });
});

// category
document.addEventListener("DOMContentLoaded", function () {
  // 데이터 받아오기
  var jsonPath = "../data/activity-category-data.json";

  // 카테고리 버튼 가져오기
  var categoryButtons = document.querySelectorAll(".inner-category p");

  // 초기 상태로 "all" 카테고리를 선택하도록 처리
  var allCategoryButton = document.querySelector("#all"); // "all" 카테고리 버튼을 찾음
  allCategoryButton.classList.add("underline"); // 밑줄 스타일을 추가
  fetch(jsonPath)
    .then((response) => response.json())
    .then((data) => {
      var allCategoryData = data.find((item) => item.category === "all");
      updateInnerBanner(allCategoryData.items);
    });

  categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      categoryButtons.forEach(function (btn) {
        btn.classList.remove("underline");
      });

      button.classList.add("underline");

      var categoryId = button.id;
      fetch(jsonPath)
        .then((response) => response.json())
        .then((data) => {
          var categoryData = data.find((item) => item.category === categoryId);
          updateInnerBanner(categoryData.items);
        });
    });
  });

  function updateInnerBanner(data) {
    var activityDetails = document.querySelector(".activity-details");

    while (activityDetails.firstChild) {
      activityDetails.removeChild(activityDetails.firstChild);
    }

    data.forEach(function (item) {
      var activityDetail = document.createElement("div");
      activityDetail.classList.add("activity-detail");

      if (item.img) {
        activityDetail.style.backgroundImage = `url(${item.img})`;
      }

      var belowDiv = document.createElement("div");
      belowDiv.classList.add("below");

      var spanBelowTop = document.createElement("span");
      spanBelowTop.classList.add("below-top");

      var titleElement = document.createElement("p");
      titleElement.id = "detail-title";
      titleElement.textContent = item.title;

      var belowTagDiv = document.createElement("div");
      belowTagDiv.classList.add("below-tag");

      // Tags
      if (item.tag2 === "") {
        var tag = item.tag1;
        var newTag = document.createElement("div");
        newTag.id = "tag";
        newTag.textContent = tag;
        belowTagDiv.appendChild(newTag);
      } else {
        var tags = [item.tag1, item.tag2];
        tags.forEach(function (tag) {
          var newTag = document.createElement("div");
          newTag.id = "tag";
          newTag.textContent = tag;
          belowTagDiv.appendChild(newTag);
        });
      }

      spanBelowTop.appendChild(titleElement);
      spanBelowTop.appendChild(belowTagDiv);
      belowDiv.appendChild(spanBelowTop);

      var tag1Element = document.createElement("p");
      tag1Element.id = "detail-tag";
      tag1Element.textContent = item["detail-tag"];
      belowDiv.appendChild(tag1Element);

      activityDetail.appendChild(belowDiv);
      activityDetails.appendChild(activityDetail);
    });
  }
});

// info
$(document).ready(function () {
  // 각 숫자의 최종 값
  var yearsFinalValue = 14;
  var meetingsFinalValue = 49;
  var blogsFinalValue = 447;

  // 애니메이션이 시작되었는지 확인하는 플래그
  var animationStarted = false;

  // 스크롤 이벤트 리스너
  $(window).on("scroll", function () {
    // 슬라이드가 뷰포트 내에 있는지 확인
    var slideTop = $(".slide").offset().top;
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition + windowHeight > slideTop && !animationStarted) {
      startCountingAnimation("years", yearsFinalValue);
      startCountingAnimation("meetings", meetingsFinalValue);
      startCountingAnimation("blogs", blogsFinalValue);

      // 애니메이션이 시작되었음을 나타내는 플래그를 true로 설정
      animationStarted = true;
    }
  });

  function startCountingAnimation(id, finalValue) {
    var element = document.getElementById(id);
    var currentValue = 0;
    var increment = Math.ceil(finalValue / 150); // 애니메이션 단계마다 증가할 값

    function updateValue() {
      currentValue += increment;
      element.textContent = currentValue;

      if (currentValue < finalValue) {
        // 애니메이션 끝까지 도달할 때까지 재귀 호출
        requestAnimationFrame(updateValue);
      } else {
        // 최종 값에 도달하면 애니메이션 클래스 제거
        element.classList.remove("counting");
      }
    }

    // 애니메이션 클래스 추가
    element.classList.add("counting");

    // 최초 애니메이션 시작
    updateValue();
  }
});
