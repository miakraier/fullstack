let pop=document.getElementById("pop")
let wrap=document.getElementById("wrap")
function show(){
  pop.style.visibility="visible"
}
function hide(){
  pop.style.visibility="hidden"
}

wrap.addEventListener("mouseenter", show)
wrap.addEventListener("mouseleave", hide)
