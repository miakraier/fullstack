//define all elements in the page
let name = document.getElementById("name")
let clas = document.getElementById("class")
let grades = document.getElementById("grades")
let Submit = document.getElementById("btn")
let Calculate = document.getElementById("btn2")
let result = document.getElementById("result")
let present = document.getElementById("present")
let presentt = document.getElementById("student")

//define student object 
let student = {
    name: "",
    clas: "",
    grades:[],
    avg(){
        let sum = 0
        for(let i =0;i<this.grades.length;i++)
        sum = sum + parseInt(this.grades[i])
    return sum/this.grades.length
},
min(){
    let min = 100
    for(let i =0;i<this.grades.length;i++)
        if(parseInt(this.grades[i])<min)
            min=parseInt(this.grades[i])
    return min
},
max(){
    let max = 0
    for(let i =0;i<this.grades.length;i++)
        if(parseInt(this.grades[i])>max)
            max=parseInt(this.grades[i])
    return max
}
}
//fuctions
function studentdet (){
    student.name=name.value
    student.clas=clas.value
    student.grades=grades.value.split(",")
}
function results (){
    let avg = student.avg()
    let min = student.min()
    let max = student.max()
    presentt.innerHTML="hello " + student.name + ","
    present.innerHTML="this is your yearly data in class " + student.clas + "<br>"
    present.innerHTML=present.innerHTML + "You minimum grade is "+min + " and you max is "+max +".<br>"
    present.innerHTML=present.innerHTML + "Your avg is "+avg
}
//define event listeners 
Submit.addEventListener("click", studentdet)
Calculate.addEventListener("click", results)