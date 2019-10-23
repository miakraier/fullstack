export{};

let x: any
x=20
x='guygygli'
x=true

let a: number
a=45
//the following lines will not work
/*a='jgfiguih'
a=true*/

let b:string
b='khgcyfyug'
//the following line will not work
//b=78

let c:boolean
c=true
c=false
//the following line will not work
//c=78

let numArr: number[]
numArr=[1,2,3,4]
//the following line will not work
/*numArr=[1,2,3,true]
numArr=11*/

function add(a:number,b:number):number{
    return a+b
}
add(1,7)

interface regulation{
    isbn:number

}

class book implements regulation{
    isbn=3
    title:string
    author:string
    pages:number
    private year:number
    constructor(title, author, pages, year, private discount:number){
        this.title=title
        this.author=author
        this.pages=pages
        this.year=year
        }
       getSummery(){
        console.log(this.year)
      }
}
/*class book{
    constructor(public title:string,public author:string,public pages:number,public year:number){}
}*/

class magazine extends book{
constructor(title, author, pages, year, discount, public month:string){
    super(title, author, pages, year, discount)
    
}
}
let hp= new book("harry potter", "jk rolling", 153, 1999,10)
let voge=new magazine("voge", "ghghg", 50, 2000, 5,"july")
voge.getSummery()
hp.getSummery()
console.log(hp.pages)

function name(firstName, lastName?){
    if (lastName!==undefined){
        console.log(firstName+" "+lastName)
        }else{
            console.log(firstName)
        }
}

name('mia')
