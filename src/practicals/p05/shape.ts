import { Drawable } from './drawable'

export class Shape implements Drawable {
    protected color:string = ''
    
    Shape(color:string){}
    getColor():string{
        return this.color
    }
    getArea():number{
        return 0
    }
    draw():void{}
}