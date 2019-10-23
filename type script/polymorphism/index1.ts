export { }
class Grandpa {
    constructor(public name: string, public salary: number, public seniority:number) { }
    sayHi() {
        console.log("i love it when you call me big papa")
    }
}
class Uncle extends Grandpa {
    constructor(name,salary, seniority, public coolnessLevel: number) {
        super(name,salary, seniority)
    }
    sayHi() {
        console.log("i'm an uncle")
    }
}

class Dad extends Grandpa {
    constructor(name,salary, seniority, public kidsNum: number) {
        super(name, salary, seniority)
    }
    sayHi() {
        console.log("daddy cool")
    }
}

let bigG: Grandpa = new Grandpa("leo",5000, 30)
let uncle: Uncle = new Uncle("bobby",7000, 8, 10)
let daddy: Dad = new Dad("joe",9000, 10, 2)
let look: Grandpa = new Uncle("luke",6000, 2, 9)//you can use the father class to define the child class without making any changes

bigG.sayHi()
uncle.sayHi()
daddy.sayHi()

let isDad= false
if(isDad){
    let f= new Dad("phill",5500, 3, 3)
    }else{
        let u = new Uncle("sam",4000, 4, 6)
    }
 let fathersArr:Dad[]
 fathersArr=[new Dad("steve",7000,4, 3), new Dad("sol",4500,2, 1)]//arry of only fathers

 let family: Grandpa[]
 family= [new Grandpa("lue",2000, 5), new Dad("gil", 3000, 2, 5), new Uncle("shir",8000,5,10)]

 let bonusclac= (someone:Grandpa) =>{
     console.log((someone.salary*someone.seniority)/2)
 }
 bonusclac(bigG)