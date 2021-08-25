var jwt = require('jsonwebtoken')
export class JWT {
    public issue = (payload:info,expireIn:number):string =>{
        return jwt.sign(
            payload,
            process.env.JWT_SECRET,
            expireIn
        )
    }
    public decode = (token:string):info=>{
        return jwt.decode(token,{complete:true})
    }
}
export interface info{
    id:number,
    role:string
}