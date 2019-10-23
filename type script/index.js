let x;
x = 20;
x = 'guygygli';
x = true;
let a;
a = 45;
//the following lines will not work
/*a='jgfiguih'
a=true*/
let b;
b = 'khgcyfyug';
//the following line will not work
//b=78
let c;
c = true;
c = false;
//the following line will not work
//c=78
let numArr;
numArr = [1, 2, 3, 4];
//the following line will not work
/*numArr=[1,2,3,true]
numArr=11*/
function add(a, b) {
    return a + b;
}
add(1, 7);
class book {
    constructor(title, author, pages, year, discount) {
        this.discount = discount;
        this.isbn = 3;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
    }
    getSummery() {
        console.log(this.year);
    }
}
/*class book{
    constructor(public title:string,public author:string,public pages:number,public year:number){}
}*/
class magazine extends book {
    constructor(title, author, pages, year, discount, month) {
        super(title, author, pages, year, discount);
        this.month = month;
    }
}
let hp = new book("harry potter", "jk rolling", 153, 1999, 10);
let voge = new magazine("voge", "ghghg", 50, 2000, 5, "july");
voge.getSummery();
hp.getSummery();
console.log(hp.pages);
function name(firstName, lastName) {
    if (lastName !== undefined) {
        console.log(firstName + " " + lastName);
    }
    else {
        console.log(firstName);
    }
}
name('mia');
