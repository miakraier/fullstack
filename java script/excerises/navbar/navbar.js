let picture = ["cactus6.jpg", "cactus2.jpg", "cactus4.jpg","cactus5.jpg"]
let one=document.getElementById("cactus1")
let two=document.getElementById("cactus2")
let three=document.getElementById("cactus3")
let four=document.getElementById("cactus4")
let p=document.getElementById("placed")
let path = "D:/visual studio code/images/"
let x=[one, two, three, four]

function choice(e){
    e.preventDefault()
if(e.target==x[0]){
 p.style.backgroundImage="url(\""+path+picture[0]+"\")"
}
if(e.target==x[1]){
    p.style.backgroundImage="url(\""+path+picture[1]+"\")"
   }
if(e.target==x[2]){
    p.style.backgroundImage="url(\""+path+picture[2]+"\")"
   }
if(e.target==x[3]){
    p.style.backgroundImage="url(\""+path+picture[3]+"\")"
   }
}

one.addEventListener("click", choice)
two.addEventListener("click", choice)
three.addEventListener("click", choice)
four.addEventListener("click", choice)
