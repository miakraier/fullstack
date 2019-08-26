function factorial(n) {
    let sum = 1
    for (let i = 1; i <= n; i++) {
        sum = sum * i
    }
    return sum
}
function showBlah(t){
    console.log(t)
}
//main program
let x=parseInt(prompt("enter a number:"))
let fac = factorial (x)
console.log (fac)

showBlah("blabla")