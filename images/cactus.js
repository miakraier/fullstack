let cover = ["cactus6.jpg", "cactus2.jpg", "cactus4.jpg","cactus5.jpg"]
let i =0
//------ changing background by time----
let bg=document.querySelector(".bg")
setInterval(function () {
   // bg.style.backgroundImage = `url(` + cover[i] + `)`
    bg.style.backgroundImage = `url(${cover[i]})`
    i++
    if (i == cover.length) {
        i = 0
    }
}, 3000)

//----- changing background by buttons---- 
/*let bg=document.querySelector(".bg")
let left=document.querySelector("#left")
let right=document.querySelector("#right")

left.addEventListener("click", movel)
right.addEventListener("click", mover)

function movel(){
    i = i-1 < 0 ? cover.length-1 : i-1;
    bg.style.backgroundImage = `url(${cover[i]})`
}

function mover(){
    i = i+1 == cover.length ? 0 : i+1;
    bg.style.backgroundImage = `url(${cover[i]})`
}
//math.abs-הופך מספר למספר אבסולוטי, כלומר גם אם הוא היה מינוס אז הוא הופך אותו לחיובי.*/