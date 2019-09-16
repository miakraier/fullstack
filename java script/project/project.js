//define the elements
let task=document.getElementById("task")
let date=document.getElementById("date")
let time=document.getElementById("time")
let save=document.getElementById("save")
let cln=document.getElementById("clean")
let notes=document.querySelector(".notes")
let lastId
//functions
//save button
function createNewNote(){
    //validation of inputs
    if(date.value==''||task.value==''){
        alert("please fill all the fields")
        return 
    }
    let noteobj={
        task: task.value,
        date: date.value,
        time: time.value
    }//creating note and elements inside of it
    //create note
    let note=document.createElement('div')
    note.className="note"
    note.setAttribute("id",lastId)
    lastId++
    //saving to local storage
    localStorage.setItem("lastid",lastId)
    localStorage.setItem(note.id,JSON.stringify(noteobj))
    notes.appendChild(note)
    //adding task from form to the note
    let content=document.createElement('div')
    content.className="content"
    content.textContent=noteobj.task
    note.appendChild(content)
    //adding the closing "button"
    let x=document.createElement('div')
    x.className="deleteNote"
    x.addEventListener("click", removeNote)
    note.appendChild(x)
    //adding time and date from form to the note
    let datedetailes=document.createElement('div')
    datedetailes.className="datedetailes"
    datedetailes.textContent=noteobj.date +" "+ noteobj.time
    note.appendChild(datedetailes)
    cleanform()
}
//clean button
function cleanform(){
    task.value=''
    date.value=''
    time.value=''
}
//delete note
function removeNote(e){
localStorage.removeItem(e.target.parentNode.id)//deleting from local storage by id
notes.removeChild(e.target.parentNode) //deleting the parent of the delete button (the note)
}
//load saved notes
function loadNotes(){ //saving notes in local storage
   if( localStorage.getItem("lastid") == null)
   {
       localStorage.setItem("lastid",0)
       lastId = 0
   }
   else{
       lastId=parseInt(localStorage.getItem("lastid"))
   }
   for (let i =0;i<localStorage.length;i++)
   {//loading saved notes
      if (!isNaN(localStorage.key(i))) {//checking the key is not the lastid
            //creating note element
            let noteobj = JSON.parse(localStorage.getItem(localStorage.key(i)))
            let note=document.createElement('div')
            note.className="note"
            note.setAttribute("id",localStorage.key(i))
            notes.appendChild(note)
            //entering content to note
            let content=document.createElement('div')
            content.className="content"
            content.textContent=noteobj.task
            note.appendChild(content)
            //adding the closing "button"
            let x=document.createElement('div')
            x.className="deleteNote"
            x.addEventListener("click", removeNote)
            note.appendChild(x)
            //adding time and date to note
            let datedetailes=document.createElement('div')
            datedetailes.className="datedetailes"
            datedetailes.textContent=noteobj.date +" "+ noteobj.time
            note.appendChild(datedetailes)
      }
   }
}
//events
save.addEventListener("click",createNewNote)
cln.addEventListener("click", cleanform)
loadNotes()
