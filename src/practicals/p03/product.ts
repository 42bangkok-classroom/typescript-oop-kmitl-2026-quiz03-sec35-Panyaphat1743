export class Product {
    readonly name:string
    protected price?:number = 0
    static readonly DISCOUNT_PERCENT:number = 10
    constructor(name:string,price?:number){
        this.name = name
        this.price = price
    }

    getPrice(){
        return this.price
    }
    setPrice(price: number){
        return this.price = price
    }
}

