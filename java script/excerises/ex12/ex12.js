let canvas=document.getElementById("canvas")
let ctx=canvas.getContext("2d")
ctx.canvas.width=window.innerWidth;
ctx.canvas.height=window.innerHeight;

//way 1-by click
function circle(e){
ctx.beginPath();
ctx.arc(e.x, e.y ,20 ,0 , 2 * Math.PI);
ctx.fillStyle=color()
ctx.fill()
ctx.stroke();
}
document.body.addEventListener("click", circle)
//way2-automaticly
/*function circle(){
    ctx.beginPath();
    let x= Math.floor(Math.random()*window.innerWidth)
    let y= Math.floor(Math.random()*window.innerHeight)
    ctx.arc(x, y ,20 ,0 , 2 * Math.PI);
    ctx.fillStyle=color()
    ctx.fill()
    ctx.stroke();
}
*/
   
function color(){
let r= Math.floor(Math.random()*256)
let g= Math.floor(Math.random()*256)
let b= Math.floor(Math.random()*256)
return 'rgb('+r+','+g+','+b+')'
}
//setInterval(circle, 3000)

