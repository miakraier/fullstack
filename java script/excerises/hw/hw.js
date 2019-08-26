let shape=document.getElementById("shape")
//shape.style.top=(shape.offsetTop+10)+"px";
//shape.style.left=(shape.offsetleft+10)+"px";
document.body.onkeydown=function(e){
    switch (e.keyCode){
        case 37: //left-a
        shape.style.left=(shape.offsetLeft-10)+"px";
        break;
        case 40: //bottom-s
        shape.style.top=(shape.offsetTop+10)+"px";
        break;
        case 39: //right-d
        shape.style.left=(shape.offsetLeft+10)+"px";
        break;
        case 38: //top-w
        shape.style.top=(shape.offsetTop-10)+"px";
        break;
    }console.log(e.keyCode)
}
















