const bcrypt = require('bcrypt')
export class Hash{
    hash = async (plainPassword:string):Promise<string> => {
        return await bcrypt.hash(plainPassword,10)
    }
    compare = async (plainPassword:string,hashedPassword:string):Promise<boolean> =>{
        return await bcrypt.compare(plainPassword,hashedPassword)
    }
}