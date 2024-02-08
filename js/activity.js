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
