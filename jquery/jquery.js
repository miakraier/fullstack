/*$(ELM).someFunction()
// another way to write
jQuery(ELM).someFunction()
//--------------------------
$("h1").someFunction() //will effect all h1
$(document).ready(function(){
    let h1=$("h1")
    console.log(h1);
})//document-the element we want to effect
//ready-when the page is loading
//another way to write:
$(function(){
    let h1=$("h1")
    console.log(h1);
})
//events---------------------------------
$(function () {
    $("h1").click(function () {
        console.log("blah")
    })
    $("h1").on("click", function () {
        console.log(this)
    })
})
//hide and show events
$(function(){let h1=$("h1")
console.log(h1)
$("#btn").click(function(){
    $("h1").show()
})
$("h1").click(function(){
    $(this).hide()
})
//toggle
$("#btn2").click(function(){
    $("h1").toggle()
})
})*/
//fade out in
$(function(){
    let h1=$("h1")
$("#btn").click(function(){
    $("h1").fadeIn(5000)
})
$("#btn2").click(function(){
    $("h1").fadeToggle()
})
//toggle
$("#btn3").click(function(){
    $("h1").fadeOut(5000)
})
})