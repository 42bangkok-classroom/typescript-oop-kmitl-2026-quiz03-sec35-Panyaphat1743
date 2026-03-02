import { Product } from './product'

export class Playstation extends Product {
  name:string
  generation:string
  price:number

  constructor(name:string,generation:number,price:number){
    super(name)
    this.name = name
    this.generation = 'Gen' + ' ' + generation
    this.price = price
  }

  getProfile(){
    return this.name + ' ' + '(' + this.generation + ')'
  }

  getDiscountPrice(){
    return this.price = this.price - (this.price * Product.DISCOUNT_PERCENT)/100
  }






  // TODO: implement class properties, constructor with super(...), and methods
}