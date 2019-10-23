class Doc {
    constructor(name) {
        this.name = name;
    }
}
class Word extends Doc {
    constructor(name, pageNum) {
        super(name);
        this.pageNum = pageNum;
        Word.sum++;
    }
    summary() {
        console.log(`${this.name} has ${this.pageNum} pages`);
    }
}
Word.sum = 0;
Word.sufix = ".docx";
class Excel extends Doc {
    constructor(name, sheetNum) {
        super(name);
        this.sheetNum = sheetNum;
        Excel.sum++;
    }
    summary() {
        console.log(`${this.name} has ${this.sheetNum} sheets`);
    }
}
Excel.sum = 0;
Excel.sufix = ".xls";
class PowerPoint extends Doc {
    constructor(name, slideNum) {
        super(name);
        this.slideNum = slideNum;
        PowerPoint.sum++;
    }
    summary() {
        console.log(`${this.name} has ${this.slideNum} slides`);
    }
}
PowerPoint.sum = 0;
PowerPoint.sufix = ".ppt";
let docArr = [];
function makeArr(arry) {
    for (let i = 0; i < 20; i++) {
        let num = Math.round(Math.random() * 3);
        switch (num) {
            case 1:
                arry[i] = new Word("doc" + i + ".docx", Math.floor(Math.random() * 100));
                break;
            case 2:
                arry[i] = new Excel("doc" + i + ".xls", Math.floor(Math.random() * 10));
                break;
            case 3:
                arry[i] = new PowerPoint("doc" + i + ".ppt", Math.floor(Math.random() * 1000));
                break;
            //anoter way to write but with random names
            /*  case 3: arry.push(new PowerPoint((Math.random()+".ppt").substring(2), Math.floor(Math.random() * 1000)))
              break;*/
        }
    }
}
makeArr(docArr);
console.log(docArr);
let Wsum = 0;
for (let i = 0; i < docArr.length; i++) {
    if (docArr[i] instanceof Word) {
        Wsum += docArr[i].pageNum;
    }
}
let Esum = 0;
for (let i = 0; i < docArr.length; i++) {
    if (docArr[i] instanceof Excel) {
        Esum += docArr[i].sheetNum;
    }
}
let Psum = 0;
for (let i = 0; i < docArr.length; i++) {
    if (docArr[i] instanceof PowerPoint) {
        Psum += docArr[i].slideNum;
    }
}
