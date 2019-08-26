function Avg() {
    let sum = 0
    let max=0
    let min=100
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            let grade = parseInt(prompt("enter grade:"))
           if(grade>max){
               max=grade
           }
           if(grade<min){
                min=grade
            }
            sum = grade + sum
        }
             }
    let avg = sum / 25
    return avg, min, max 
}
/*-----main program-----*/
let avg, min, max= Avg()
console.log(avg, min, max)