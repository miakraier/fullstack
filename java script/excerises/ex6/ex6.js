function sumall(n){
    let sum=0
    while(n>0){
        let temp=n%10
        n=parseInt(n/10)
        sum=temp+sum
    }
    return sum
}
/*-----main program------*/
let sum = sumall(673765)
console.log(sum)