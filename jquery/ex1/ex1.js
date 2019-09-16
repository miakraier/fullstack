$(function(){
    $("p").slideUp()
    $("button").click(function(){
        $(this).next().slideToggle()
        $(this).parent().siblings().children("p").slideUp()
    })
})