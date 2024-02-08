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

    // Remove existing child elements
    while (activityDetails.firstChild) {
      activityDetails.removeChild(activityDetails.firstChild);
    }

    data.forEach(function (item) {
      var activityDetail = document.createElement("div");
      activityDetail.classList.add("activity-detail");

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
