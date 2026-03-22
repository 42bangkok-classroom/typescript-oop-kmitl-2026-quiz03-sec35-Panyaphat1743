import { Shape } from './shape'
export class Rectangle extends Shape{
    private width:number
    private height:number

    constructor(color:string,wid:number,hei:number){
        super()
        this.color = color
        this.width = wid
        this.height = hei
    }
    Rectangle(color:string,width:number,height:number){}
    draw():void{
        console.log('Drawing a ' + this.color + ' rectangle with width ' + this.width + ' and height ' + this.height)
    }
    getArea():number{
        return this.width * this.height 
    }
}