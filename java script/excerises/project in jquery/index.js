
//functions
//save button
    //validation of inputs
    $(function(){
        $("#save").click(function(){
if(date.value==''||task.value==''){
document.alert("please fill all the fields")
return
}  
let noteobj={
task:$("#task").value,
date:$("#date").value,
time:$("#time").value
}})//creating note and elements inside of it
    //create note
   let note= $(".notes").html("<div></div>")
   $("note").addclass("note")
   $("note").attr("id", lastId)
   lastId++
    //saving to local storage
    localStorage.setItem("lastid",lastId)
    localStorage.setItem(note.id,JSON.stringify(noteobj))
    $(".notes").append(note)
    //adding task from form to the note
    let content=$("document").createElement('div')
    $("content").addclass($("content"))
    $("content").text(noteobj.task)
    $("note").append("content")
     //adding the closing "button"
     let x=$("document").createElement('div')
     $("x").addclass("deleteNote")
     $("x").click(removeNote)
     ("note").append("x")
    //
})