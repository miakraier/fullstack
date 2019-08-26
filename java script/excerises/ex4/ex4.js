function Avg() {
    let sum = 0
    for (let i = 1; i <= 10; i++) {
        let x = parseInt(prompt("enter a number"))
        sum = sum + x
    }
    let avg = sum / 10
    return avg
}

//main program
let avg= Avg()
console.log (avg)