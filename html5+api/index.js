//location---------------
/*let locx = document.getElementById("locx")
let locy = document.getElementById("locy")
let city = document.getElementById("city")

navigator.geolocation.getCurrentPosition(pos => {
    locx.textContent += pos.coords.latitude
    locy.textContent += pos.coords.longitude
    fetch(`https://geocode.xyz/${pos.coords.latitude},${pos.coords.longitude}?geoit=json`)
    .then(res =>res.json())
    .then(data =>{console.log(data)
        city.innerText=city.innerText+data.city})
})*/
//drag n drop---------------
let td=document.querySelector("#tdrag")
let divs=document.querySelectorAll(".d")
//handle drag events
let id
td.addEventListener("dragstart",(e)=>{
    console.log("you dragged me");
    id=e.target.id
} 
)
for(let div of divs){
    div.addEventListener("dragover", (e)=>{
        e.preventDefault()
        console.log("you dragged over ", e.target.id);
    })
div.addEventListener("drop",(e)=>{
    console.log("you dropped me on ", e.target.id);
    e.target.append(document.getElementById(id));
})
}