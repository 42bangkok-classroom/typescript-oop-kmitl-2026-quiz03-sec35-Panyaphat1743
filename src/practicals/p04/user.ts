export class User {
    username:string
    private password:string
    private static LOGIN_ATTEMPTS:number = 0
    
    constructor(name:string,pass:string){
        this.username = name
        this.password = pass
    }
    User(username:string,password:string){
        console.log(this.username = username)
        console.log(this.password = password)
    }
    
    login(pass:string):boolean{
        if(this.validatePassword(pass)){
            return true
        }else{
            return false
        }
    }

    private validatePassword(pass:string):boolean{
        if(pass === this.password){
            User.LOGIN_ATTEMPTS += 1
            return true
        }else{
            User.LOGIN_ATTEMPTS += 1
            return false
        }
    }

    getLoginAttempts():number{
        return User.LOGIN_ATTEMPTS
    }

}
