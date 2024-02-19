const mouse = document.querySelector('.mouse-shapes');


document.addEventListener('mousemove',function(e){
  position(e.pageX, e.pageY);
});

function position(pageX, pageY){
  mouse.style.left = pageX + "px";
  mouse.style.top = pageY+ "px";
}