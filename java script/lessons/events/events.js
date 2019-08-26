let first = document.querySelector("#first")
let second = document.querySelector("#second")
//---saperete-----
/*first.addEventListener("click", function(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    first.style.color =`rgb(${r},${g},${b})`
})

second.addEventListener("click", function(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    second.style.color =`rgb(${r},${g},${b})`
})*/
//-----random----
first.addEventListener("click", changeColor)
second.addEventListener("click", changeColor)

function changeColor(e){
    console.log(e.target)
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    e.target.style.color =`rgb(${r},${g},${b})`
}
//------------------------------------------
/*let name = document.querySelector ("#name")
let pw = document.querySelector ("#pw")
let send = document.querySelector ("#send")


send.addEventListener("click", function(e){
    e.preventDefault()
    console.log(name.value, pw.value)
})*/
//-----------------------------------------
let name = document.querySelector ("#name")
let first = document.querySelector ("#first")

name.addEventListener("keydown", function(e){
    first.textContent = `hey ${name.valeu}`
})

