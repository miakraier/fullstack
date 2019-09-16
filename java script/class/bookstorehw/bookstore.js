class stores{
    constructor(address, employeesNumber, yearlyIncome){
        this.address=address
        this.employeesNumber=employeesNumber
        this.yearlyIncome=yearlyIncome
    }
}
class products{
    constructor(productName, price, targetAudience, shelf){
        this.productName=productName
        this.price=price
        this.targetAudience=targetAudience
        this.shelf=shelf
    }
    sale(){
        this.price-=15
    }
}
class people{
    constructor(firstName, lastName, phoneNumber, email, address){
        this.firstName=firstName
        this.lastName=lastName
        this.phoneNumber=phoneNumber
        this.email=email
        this.address=address
    }
}


class books extends products{
    constructor(productName, price, targetAudience, shelf, junra, partOfSeries, pageNumber, author){
        super(productName, price, targetAudience, shelf)
        this.junra=junra
        this.partOfSeries=partOfSeries
        this.pageNumber=pageNumber
        this.author=author 
    }
}

class magazines extends products{
   constructor (productName, price, targetAudience, shelf, magazineType, publishRoutine) {
    super(productName, price, targetAudience, shelf)
    this.magazineType=magazineType
    this.publishRoutine=publishRoutine
   }
}

class employees extends people{
    constructor(firstName, lastName, phoneNumber, email, address,storeBase, job, seniority, salary){
        super(firstName, lastName, phoneNumber, email, address)
        this.storeBase=storeBase
        this.job=job
        this.seniority=seniority
        this.salary=salary
    }
    raise(){
        this.salary += 100
    }
}
class clients extends people{
    constructor(firstName, lastName, phoneNumber, email, address, lastBuy, membership){
        super(firstName, lastName, phoneNumber, email, address)
        this.lastBuy=lastBuy
        this.membership=membership
    }
}

let book=new books("the litle prince", 50, "all", "b7", "childern's book", "no",87, "Antoine de Saint-Exupéry")
let voge=new magazines("voge", 45, "woman","c2", "fashion", "monthly")
let cashier=new employees("sam","levi", 0546667733, "sheker@gamil.com", "florentin 33, tel aviv", "florentin", "cashier", 1.5, 5000)
let cnt=new clients("lily","aldrin",0502233445, "stam@stam.com", "haetrog 4, hofit", "the litle prince","gold member")
let str=new stores("florentin 18, tel aviv", 5, 1000000)