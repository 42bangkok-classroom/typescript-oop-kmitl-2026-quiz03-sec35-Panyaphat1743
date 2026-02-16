export class Product {
    readonly name:string
    protected price:number = 0
    static readonly DISCOUNT_PERCENT:number = 10
    constructor(name:string,price?:number){
        if(price){
            this.price = price
        }else{
            this.price = 0
        }
        this.name = name
    }

    getPrice(){
        return this.price
    }
    setPrice(price: number){
        return this.price = price
    }
}

