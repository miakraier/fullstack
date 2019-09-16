let canvas=document.getElementById("cnv")
let draw=canvas.getContext("2d")
let rdaius=document.getElementById("radius")
let calculate=document.getElementById("calculate")
let cln=document.getElementById("clean")
let vol= document.getElementById("volume")
let div=document.getElementById("d")
let v
function circle(){
    if(radius.value<=(canvas.width/2) && radius.value<=(canvas.height/2)){
    draw.beginPath();
    draw.arc(canvas.width/2, canvas.height/2, radius.value ,0 , 2 * Math.PI);
    draw.stroke();
    v = (4/3) * Math.PI * Math.pow(radius.value, 3);
    v = v.toFixed(4);
    vol.innerText="Volume: " + v
    }else{
    div.innerText="radius may be too big or not a corect number!"
    }
}
    calculate.addEventListener("click", circle)

    function clean(){
        draw.clearRect(0, 0, canvas.width, canvas.height);
    }
    cln.addEventListener("click", clean)

   /* function bonus(){
       for(i=1, i<=(canvas.width/2) && i<=(canvas.height/2), i++;)
        draw.beginPath();
        draw.arc(canvas.width/2, canvas.height/2, i ,0 , 2 * Math.PI);
        draw.stroke();
    }
*/

