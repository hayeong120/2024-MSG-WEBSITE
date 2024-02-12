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

  categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var categoryId = button.id;

      // all이면 모든 정보 가져오기
      if (categoryId === "all") {
        fetch(jsonPath)
          .then((response) => response.json())
          .then((data) => updateInnerBanner(data));
      } else {
        fetch(jsonPath)
          .then((response) => response.json())
          .then((data) => {
            var categoryData = data.find(
              (item) => item.category === categoryId
            );
            updateInnerBanner(categoryData.items);
          });
      }
    });
  });

  function updateInnerBanner(data) {
    var activityDetails = document.querySelector(".activity-details");

    while (activityDetails.firstChild) {
      activityDetails.removeChild(activityDetails.firstChild);
    }

    // TODO :activity-detail에 backgroud로 이미지 추가
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
document.addEventListener("DOMContentLoaded", function () {
  // 각 숫자의 최종 값
  var yearsFinalValue = 14;
  var meetingsFinalValue = 49;
  var blogsFinalValue = 447;

  // 애니메이션 시작
  startCountingAnimation("years", yearsFinalValue);
  startCountingAnimation("meetings", meetingsFinalValue);
  startCountingAnimation("blogs", blogsFinalValue);

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
