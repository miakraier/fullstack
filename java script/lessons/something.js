/*let age = 63
let gender= "female"
// first way
if (age>=62){
    if (gender == "female"){
    console.log("retired")
        }
    else if (age>=67){
        console.log("retired")
            }}
//that's a way with one complicated condition
            if (age>=62 && gender== "female" || age>=67 && gender== "male"){
                console.log("retired")   
            }
            else {console.log ("not retired")}
//לוח הכפל
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        document.writeln(i * j)
    }
    document.write("<br>")
}
//מערך
let baby
baby=[//just adding a drawer
     46, 50, 403, 30, 206]
baby[3]=30
console.log(baby)
if (baby[3]>baby[2]){console.log("great")}
else {console.log ("issa lie")}

let sum=0
for (let i=0; i<baby.length; i++){
    sum=sum+baby[i]
}
console.log(sum/baby.length)
//function
function sayhi (name){
    console.log ("hi"+ name)
}
sayhi("mia")
let n=prompt("your name:")
sayhi(prompt("your mane:"))
//הגדרה של פונקציה
function add (a,b){
        return a+b
}
//----------------------------------------
console.log (add (4,11))
console.log (add (4,11)/3)
console.log (add (+prompt(), +prompt())) */

/*function dogyears(age) {
    age = age * 7
    return age
}
//main program
let age = parseInt(prompt("enter dog's age:"))
document.write(dogyears(age) + " dog years")

let s = {
    color: "black",
    coord: {
        x: 2,
        y: 1
    },
    step() {
        this.coord.y++
    },
    eat(direction) {
        this.coord.y++
        if (direction == "right") {
            this.coord.x--
        }
        else {
            this.coord.x++
        }console.log ("new psition- x:"+this.coord.x+",y:"+this.coord.y)
    }
}

s.eat("right")
s.eat("left")
//----------------way1---------------------
let str="miakraier@gamil.com"
let atCount=0
for (let i=0; i<str.length; i++){
    if (str.charAt(i)=="@"){
        atCount++
    }
}
if (atCount>1){
    console.log ("e-mail is not correct")
}
else {
    console.log ("e-mail is correct")
}
//---------way 2--------------------------------
let str= "miakraier@gmail.com"
let first= str.indexOf("@")
let last= str.lastIndexOf("@")

if (first==last && last!=-1){
    console.log ("e-mail is correct")
}
else {console.log ("e-mail is not correct")}*/
//----------way 3--------------------------------
let str= "miakraier@gmail.com"
if (str.split("@").length==2){
    console.log("e-mail is correct")
}
else {
    console.log("e-mail is not correct")
}
