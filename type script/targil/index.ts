export{};
interface R {
    tax: number
    price: number
    barcode: string
    taxcaculate()
}

class book implements R {
    constructor(public tax,public price,public barcode, public title:string, public author:string, public pageNum:number, public year:number){
      } 
  taxcaculate(){
    return this.price * (this.tax / 100)
    }
}

class drama extends book{
  constructor(tax, price, barcode, title, author, pageNum, year, private subtype:string){
      super(tax, price, barcode, title, author, pageNum, year)
  }  
}
let b= new book (17,100, "123456", "hp","jk rolling", 157, 1999 )
let d=new drama(17, 100, "9867654", "hjk","sam sam", 128, 2001, "dramatic comedy")