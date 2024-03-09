document
    .getElementById("darkModeToggle")
    .addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

let currentSlide = 0;

function showSlide(index) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const totalSlides = document.querySelectorAll('.slider-item').length;

    let slideWidth = getSlideWidth();

    if (index >= totalSlides) {
        currentSlide = totalSlides - 1;
    } else if (index < 0) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    let newTransformValue = -currentSlide * slideWidth + 'px';

    sliderWrapper.style.transform = 'translateX(' + newTransformValue + ')';

    updateIndicators();
}

function getSlideWidth() {
    const windowWidth = window.innerWidth;
    let slideWidth;

    if (windowWidth >= 600) {
        slideWidth = 500;
    } else {
        slideWidth = 350;
    }

    return slideWidth;
}

window.addEventListener('resize', function () {
    showSlide(currentSlide);
});


function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}
function updateIndicators() {
    const indicatorsContainer = document.querySelector('.slide-indicators');
    const totalSlides = document.querySelectorAll('.slider-item').length;

    indicatorsContainer.innerHTML = '';

    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => showSlide(i));

        if (i === currentSlide) {
            indicator.classList.add('active');
        }

        indicatorsContainer.appendChild(indicator);
    }
}

// 초기화
showSlide(currentSlide);