let main=document.getElementById("main")
let btn=document.getElementById("btn")

main.addEventListener("mouseenter", function (event) {
    event.target.style.opacity="1"});

setTimeout(function() {
    event.target.style.opacity ="0";
  }, 500);

main.addEventListener("mouseleave", function (event) {
    event.target.style.opacity="0"});

setTimeout(function() {
    event.target.style.opacity ="1";
  }, 500);
