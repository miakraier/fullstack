function factorial() {
    let n = parseInt(prompt("enter number:"))
    let sum = 1
    for (i = 1; i < n; i++) {
        sum = sum * i
    }
    return sum
}
/*-----main program------*/

console.log(factorial())
document.write(factorial())
