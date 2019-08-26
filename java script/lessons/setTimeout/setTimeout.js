//way1
/*setTimeout(sayhi, 3000)

function sayhi(){
    console.log("hi")
}
//way 2
setTimeout(function(){
    console.log("hi")
}, 4000)

//ex 1
setTimeout (notyey,2000)

function notyey(){
    document.querySelector("#yey").textContent="not yey"
    //document.getElementById("yey").textContent="not yey"
}

//ex 2 
let x= document.getElementById("yey")

setTimeout(function(){
x.textContent="not yey"
}, 2000)

//ex setInterval
let x= document.getElementById("yey") 
let bool= true

setInterval(function(){
if(bool){
    x.textContent="yey"
    bool=false
}else{
    x.textContent="not yey"
    bool=true
}
}, 3000)

//ex 2
let x= document.getElementById("yey")
let arr=[" red"," green"," blue"]
let i=0
setInterval(function(){
    x.textContent="you are"+ arr[i]
    //x.style="color:"+arr[i]
    x.style.color=arr[i]
    i++
    if(i==arr.length){
        i=0
    }
}, 2000)*/
//ex 3
let x= document.getElementById("yey")
let y=document.getElementById("me")
let colors=[" red"," green"," blue"]
let adjective=[" nice"," smart"," pretty"]

let i=0
x.style.display="inline-block"
y.style.display="inline-block"
setInterval(function(){
    y.textContent=adjective[i]
    y.style.backgroundColor= colors[i]
    x.style.fontFamily="'Lobster', cursive";
    y.style.fontFamily="'Lobster', cursive";
    i++
    if(i==adjective.length){
        i=0
    }
}, 2000)
