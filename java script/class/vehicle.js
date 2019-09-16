class vehical {
    constructor(brand, plateNumber, maxSpeed, seatNumber) {
        this.brand = brand
        this.plateNumber = plateNumber
        this.maxSpeed = maxSpeed
        this.seatNumber = seatNumber
    }
}
class engined extends vehical {
    constructor(brand, plateNumber, maxSpeed, seatNumber, gasType, engineVolume) {
        super(brand, plateNumber, maxSpeed, seatNumber)
        this.gasType = gasType
        this.engineVolume = engineVolume
    }
}
class landEngined extends engined {
    constructor(brand, plateNumber, maxSpeed, seatNumber, gasType, engineVolume, wheelNumber, transmition) {
        super(brand, plateNumber, maxSpeed, seatNumber, gasType, engineVolume)
        this.wheelNumber = wheelNumber
        this.transmition = transmition
    }
}
class seaEngined extends engined {
    constructor(brand, plateNumber, maxSpeed, seatNumber, gasType, engineVolume, boatType) {
        super(brand, plateNumber, maxSpeed, seatNumber, gasType, engineVolume)
        this.boatType = boatType
    }
}
class mechanic extends vehical{
    constructor(brand, plateNumber, maxSpeed, seatNumber, movingForm){
        super(brand, plateNumber, maxSpeed, seatNumber)
        this.movingForm=movingForm
    }
}
class landMechanic extends mechanic{
    constructor(brand, plateNumber, maxSpeed, seatNumber, movingForm, wheelNumber){
        super (brand, plateNumber, maxSpeed, seatNumber, movingForm)
        this.wheelNumber=wheelNumber
    }
}
class seaMechanic extends mechanic{
    constructor(brand, plateNumber, maxSpeed, seatNumber, movingForm, boatType){
        super(brand, plateNumber, maxSpeed, seatNumber, movingForm)
        this.boatType=boatType
    }
}
let yact=new seaEngined("BERTRAM", 333444555, "20km/h", 6, "soler", 3, "yact")
let car= new landEngined("kia", 5465423, "150km/h", 5, "soler", 6, 4, "automatic")
let bicycle= new landMechanic("Pinarello", "none", "20km/h", 1, "peddals", 2)
let boat= new seaMechanic("blah", 265431, "10km/h", 6, "paddels", "paddel boat")
