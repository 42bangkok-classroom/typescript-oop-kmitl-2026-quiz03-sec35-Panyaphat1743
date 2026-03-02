export class User {
    username:string
    private password:string
    private static LOGIN_ATTEMPTS:number
    count:number = 0
    
    constructor(name:string,pass:string){
        this.username = name
        this.password = pass
    }
    User(username:string,password:string){
        
    }
    
    login(password:string):boolean{
        if(password === 'secret123'){
            this.count += 1
            return true
        }else{
            this.count += 1
            return false
        }
    }

    private validatePassword(password:string):boolean{
        return true
    }

    getLoginAttempts():number{
        return this.count
    }

}
