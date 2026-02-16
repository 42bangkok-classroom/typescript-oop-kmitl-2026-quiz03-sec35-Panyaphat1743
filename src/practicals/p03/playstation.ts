import { Product } from './product'

export class Playstation extends Product {
  playname:string
  gen:string
  price:number

  constructor(name:string,generation:number,price:number){
    super(name)
    this.playname = name
    this.gen = 'Gen' + ' ' + generation
    this.price = price
  }
  getProfile(){
    return this.playname + ' ' + '(' + this.gen + ')'
  }
  getPrice(){
    return this.price
  }
  getDiscountPrice(){
    return this.price = this.price - (DISCOUNT_PERCENT)
  }






  // TODO: implement class properties, constructor with super(...), and methods
}