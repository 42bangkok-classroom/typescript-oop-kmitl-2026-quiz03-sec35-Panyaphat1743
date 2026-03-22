import { Shape } from './shape'
export class Circle extends Shape {
    private radius:number

    constructor(color:string,rad:number){
        super()
        this.color = color
        this.radius = rad
        }

    draw():void{
        console.log('Drawing a ' + this.color + ' circle with radius ' + this.radius)
    }
    getArea():number{
        return Math.PI * (this.radius)**2
    }
}
