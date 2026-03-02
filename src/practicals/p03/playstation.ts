import { Product } from './product'

export class Playstation extends Product {
  playname:string
  gen:number
  price:number
  constructor(name:string,generation:number,price:number){
    super(name)
    this.playname = name
    this.gen = generation
    this.price = price
  }


  getProfile(){
    return this.playname + ' ' + '(' + 'Gen' + ' ' + this.gen + ')'
  }

  getDiscountPrice(){
    return this.price = this.price - (this.price * Product.DISCOUNT_PERCENT)/100
  }






  // TODO: implement class properties, constructor with super(...), and methods
}