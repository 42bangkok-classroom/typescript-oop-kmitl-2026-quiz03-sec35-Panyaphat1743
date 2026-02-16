export class Person {
    private age?:number
    firstname?:string
    lastname?:string
    static COUNTRY:string = 'Thailand'

    getFullName(){
        return this.firstname + " " + this.lastname
    }
    setAge(age:number){
        this.age = age
    }
    getAge(){
        return this.age
    }
}