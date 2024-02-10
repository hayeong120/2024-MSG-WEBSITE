let headerIds = document.getElementsByClassName("header-menu");

function handleClick(event) {
    // alert("클릭");
    if (event.target.classList[1] === "clicked") {
        // alert(event.target.classList[1]);
        event.target.classList.remove("clicked");
    } else {
        for (var i = 0; i < headerIds.length; i++) {
            headerIds[i].classList.remove("clicked");
        }
        
        console.log(headerIds[0].classList+" 클래스 지움");
        event.target.classList.add("clicked");
    }
}

function init() {
    for (var i = 0; i < headerIds.length; i++) {
        headerIds[i].addEventListener("click", handleClick);
    }
}

init();