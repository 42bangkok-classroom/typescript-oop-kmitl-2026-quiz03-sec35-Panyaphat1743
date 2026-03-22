import { Drawable } from './drawable'

export abstract class Shape implements Drawable {
    protected color:string = ''
    
    getColor():string{
        return this.color
    }
    abstract getArea():number
    abstract draw():void
}