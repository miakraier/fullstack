let str=document.getElementById("try")
str.split(" ")
function reverse(str){
 if(str.length>2)
 document.write(str.reverse())  
}
str.addEventListener("click", reverse)
