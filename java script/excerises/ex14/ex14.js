let gr=document.getElementById("green")
let pr=document.getElementById("purple")
let bl=document.getElementById("blue")
let pn=document.getElementById("pink")
let bg=document.getElementById("color")

function color(e){
    e.preventDefault()
    if(e.target==gr){
        document.bg.style.backgroundColor="green"
    }
    if(e.target==pr){
        document.bg.style.backgroundColor="purple"
    }
    if(e.target==bl){
        document.bg.style.backgroundColor="blue"
    }
    if(e.target==pn){
        document.bg.style.backgroundColor="pink"
    }
}

gr.addEventListener("click", bg)
pr.addEventListener("click", bg)
bl.addEventListener("click", bg)
pn.addEventListener("click", bg)