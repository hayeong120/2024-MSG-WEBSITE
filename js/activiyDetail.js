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

// 현재 페이지 URL 가져오기
var currentUrl = window.location.href;

// URL에서 매개변수 추출 함수
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// "title" 매개변수의 값을 가져오기
var titleValue = getParameterByName('title', currentUrl);

// 결과 출력
console.log("title 매개변수의 값: " + titleValue);
// JSON 파일에서 데이터를 가져오기

fetch('data/activity-category-data.json')
    .then(response => response.json())
    .then(jsonData => {
        // 현재 페이지 URL에서 "title" 매개변수의 값 가져오기
        var currentUrl = window.location.href;
        var titleValue = getParameterByName('title', currentUrl);

        // "all" category에 해당하는 데이터 필터링
        var allCategoryData = jsonData.find(category => category.category === 'all');

        if (allCategoryData) {
            // "titleValue"와 일치하는 데이터 찾기
            var matchingData = allCategoryData.items.filter(item => item.title === titleValue);

            // "below-tag" 클래스를 가진 요소 선택
            var belowTagElement = document.querySelector('.below-tag');
            var whatElement = document.querySelector('.what');
            var titleElement = document.querySelector('.what-title');
            var messageElement = document.querySelector('.what-message');
            var memberElement = document.querySelector('#member');
            var timeElement = document.querySelector('#time');
            var langElement = document.querySelector('#lang');
            var messageMemberElement = document.querySelector('.message-member');
            var messageTimeElement = document.querySelector('.message-time');
            var messageLangElement = document.querySelector('.message-lang');

            var wrapperElement = document.querySelector('.slider-wrapper');

            var introduceElement = document.querySelector('.explan-detail');
            var introduceTextElement = document.querySelector('.explan-text');

            var speechElement = document.querySelector('.speech');


            // 찾은 데이터에 대해 #tag(n) 값을 동적으로 추가
            matchingData.forEach(function (data) {

                titleElement.textContent = data.title;
                whatElement.appendChild(titleElement);

                messageElement.textContent = data.explan;
                whatElement.appendChild(messageElement);

                messageMemberElement.textContent = data.part;
                memberElement.appendChild(messageMemberElement);

                messageTimeElement.textContent = data.time;
                timeElement.appendChild(messageTimeElement);

                messageLangElement.textContent = data.lang;
                langElement.appendChild(messageLangElement);

                introduceElement.textContent = data.introduce;
                introduceTextElement.appendChild(introduceElement);

                for (let i = 1; data['tag' + i] != null; i++) {
                    var tagKey = 'tag' + i;
                    var tagValue = data[tagKey];

                    if (tagValue) {
                        var tagElement = document.createElement('div');
                        tagElement.id = 'tag';

                        tagElement.textContent = tagValue;

                        belowTagElement.appendChild(tagElement);
                    }
                } let i = 0;
                do {
                    var imgValue = data['img' + i];
                    console.log(imgValue);
                    var item = document.createElement('div');
                    item.className = 'slider-item';

                    if (imgValue) {
                        var img = document.createElement('img');
                        img.src = imgValue;
                    } else {
                        // Assuming 'data.img' is the default image source if 'imgValue' is not present
                        var img = document.createElement('img');
                        img.src = data.img;
                    }

                    item.appendChild(img);
                    wrapperElement.appendChild(item);
                    showSlide(currentSlide);

                    i++;
                } while (data['img' + i] != null);




                for (let i = 0; data['speech'][i] != null; i++) {
                    var speechValue = data['speech'][i];
                    // console.log(speechValue);

                    if (speechValue) {
                        var group = document.createElement('div');
                        group.className = 'speech-group';

                        var bubble = document.createElement('div');
                        bubble.className = 'speech-bubble';

                        var text = document.createElement('div');
                        text.className = 'speech-text';
                        text.textContent = speechValue.comment;

                        var name = document.createElement('div');
                        name.className = 'speech-name';

                        var nameText = document.createElement('div');
                        nameText.id = 'name';
                        nameText.textContent = speechValue.name;

                        name.appendChild(nameText);
                        bubble.appendChild(text);
                        group.appendChild(bubble);
                        group.appendChild(name);
                        speechElement.appendChild(group);
                    }
                    showSlide(currentSlide);
                }
            });
        } else {
            console.error('No data found for "all" category.');
        }
    })
    .catch(error => console.error('JSON 데이터를 가져오는 중 오류 발생:', error));

// 초기화
showSlide(currentSlide);