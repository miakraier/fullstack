//local storage (בלי קשר לשאר הדף)----------------------------------------
localStorage.setItem("name", "mia")
//localStorage.name="mia"  עוד אופציה ליצור אןבייקט בלוקל סטורג'
console.log(localStorage.getItem("name"))
localStorage.removeItem("name")
//arry
let arr=["task1","task2","task3","task4","task5"]
for(let i=0; i<arr.length; i++){
    localStorage.setItem(`stam${i+1}`,arr[i])
}
//promise----------------------------------------------------------------------------------
//DOM
let frm = document.getElementById("form")
let crd = document.getElementById("credit")

function success() {
    console.log("ok")
}
function fail() {
    console.log("error")
}
/*
//callback--------------------------------------
//event
frm.addEventListener("submit", function (e) {
    e.preventDefault
    checkCard(crd.value, success, fail)
})

//check credit number validation
function checkCard(n, s, f){
    setTimeout(() => {
        if (n == 123456789) {
            s()
        }
        else {
            f()
        }
    }, 2000);
}*/


//with new promise---------------------------
//event
frm.addEventListener("submit", function(e){
    e.preventDefault()
    checkCard(crd.value)
    .then(success)
    .catch(fail)
})

//check credit number validation
function checkCard(n){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
         if(n==123456789){
             resolve()
         }   else{
             reject("not valid card")
         }
        }, 2000);
    })
}
//with try and catch----------------------------------
//event
frm.addEventListener("submit", async function(e){
    e.preventDefault()
    try{
        await checkCard(crd.value, success, fail)
        success()
    }catch{
        fail()
    }
})
//check credit number validation
function checkCard(n){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
         if(n==123456789){
             resolve()
         }   else{
             reject("not valid card")
         }
        }, 2000);
    })
}
