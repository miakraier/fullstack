class book {
    constructor(tax, price, barcode, title, author, pageNum, year) {
        this.tax = tax;
        this.price = price;
        this.barcode = barcode;
        this.title = title;
        this.author = author;
        this.pageNum = pageNum;
        this.year = year;
    }
    taxcaculate() {
        return this.price * (this.tax / 100);
    }
}
class drama extends book {
    constructor(tax, price, barcode, title, author, pageNum, year, subtype) {
        super(tax, price, barcode, title, author, pageNum, year);
        this.subtype = subtype;
    }
}
let b = new book(17, 100, "123456", "hp", "jk rolling", 157, 1999);
let d = new drama(17, 100, "9867654", "hjk", "sam sam", 128, 2001, "dramatic comedy");
