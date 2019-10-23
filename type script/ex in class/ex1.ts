export { }

abstract class Doc {
    constructor(public name: string) {
        }
   abstract summary()
}

class Word extends Doc {
    static sum:number=0
    constructor(name, public pageNum: number) {
        super(name)
        Word.sum++
    }
    static sufix=".docx"
    summary(){
        console.log(`${this.name} has ${this.pageNum} pages`)
    }
}

class Excel extends Doc {
    static sum:number=0
    constructor(name, public sheetNum: number) {
        super(name)
        Excel.sum++
    }
    static sufix=".xls"
     summary(){
        console.log(`${this.name} has ${this.sheetNum} sheets`)
    }
}

class PowerPoint extends Doc {
    static sum:number=0
    constructor(name, public slideNum: number) {
        super(name)
        PowerPoint.sum++
    }
    static sufix=".ppt"
    summary(){
        console.log(`${this.name} has ${this.slideNum} slides`)
    }
}

let docArr: Doc[] = []

function makeArr(arry) {
    for (let i = 0; i < 20; i++) {
        let num = Math.round(Math.random() * 3)
        switch (num) {
            case 1: arry[i] = new Word("doc" + i + ".docx", Math.floor(Math.random() * 100))
                break;
            case 2: arry[i] = new Excel("doc" + i + ".xls", Math.floor(Math.random() * 10))
                break;
            case 3: arry[i] = new PowerPoint("doc" + i + ".ppt", Math.floor(Math.random() * 1000))
                break;
               //anoter way to write but with random names
              /*  case 3: arry.push(new PowerPoint((Math.random()+".ppt").substring(2), Math.floor(Math.random() * 1000)))
                break;*/
        }
    }
}

makeArr(docArr)
console.log(docArr)

let Wsum=0
for(let i=0; i<docArr.length; i++){
    if(docArr[i] instanceof Word){
        Wsum+=(docArr[i] as Word).pageNum
    }
}

let Esum=0
for(let i=0; i<docArr.length; i++){
    if(docArr[i] instanceof Excel){
        Esum+=(docArr[i] as Excel).sheetNum
    }
}

let Psum=0
for(let i=0; i<docArr.length; i++){
    if(docArr[i] instanceof PowerPoint){
        Psum+=(docArr[i] as PowerPoint).slideNum
    }
}