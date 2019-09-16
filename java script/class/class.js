
/*
let student1 = {
    name: "yoni",
    grade: 100,
    age: 25,
    email: "sheker@gamil.com",
    sayHi () {
        console.log(`my name is ${this.name} and i am ${this.age} years old`)
    }
}
let student2 = {
    name: "gili",
    grade: 95,
    age: 30,
    email: "kolshehu@gamil.com",
    sayHi () {
        console.log(`my name is ${this.name} and i am ${this.age} years old`)
    }
}
console.log(student1)
console.log(student2)*/
/*
class humans{
    constructor(name, grade, age, email){
console.log("new human was born");
    this. name=name
    this.grade=grade
    this.age=age
    this.email=email
    }
    sayHi(){
        console.log(`my name is ${this.name} and i am ${this.age} years old`);
    }
    bday(){
        this.age++
        }
}// the word new is calling the constractor function
let yoni=new humans("yoni", 100, 25, "sheker@gamil.com")
let gili=new humans("gili", 95, 30, "kolshehu@gamil.com")
console.log(yoni)
console.log(gili)*/
//another example------
class employee {
    constructor(name, age, salary){
        this.name= name
        this.age= age
        this.salary= salary
    }
    raise(){
        this.salary += s
    }
}
class cashier extends employee {
    constructor(name, age, salary, station, phoneLine){
        super(name, age, salary)
    this.station=station
    this.phoneLine=phoneLine

}
}
class manager extends employee {
    constructor(name, age, salary, bonus, seniority){
        super(name, age, salary)
        this.bonus=bonus 
    }
}
class juniorManager extends manager{
    constructor(name, age, salary, bonus, seniority, ojt){
    super(name, age, salary, bonus, seniority)
    this.ojt=ojt //זמן חפיפה
    }
}
class seniorManager extends manager{
    constructor(name, age, salary, bonus, seniority, rank){
    super(name, age, salary, bonus, seniority)
    this.rank= rank
}
}
let emp1= new employee("guy", 40, 10)
let emp2= new employee("gal", 35, 200)
let cash1 =new cashier("yam", 30, 3000, 9, 2)
let cash2=new cashier("lily", 24, 500, 6, 4)
let man1= new manager("or", 47, 5000, 200, 1.5)
let jman1= new juniorManager("idan", 45, 5000, 200, 1, 2)
let sman2= new seniorManager("eyal", 50, 5000, 200 ,3 ,"master")