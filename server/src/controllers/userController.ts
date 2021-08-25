import { logger } from "../core/logger/logger";
import User from "../models/User.model";

export class UserController {

    public create = async (user:User):Promise<string> =>{
        try {
            await User.create(user);
            return "User Created"
        } catch (error) {
            logger.error("error creating user:",error)
            throw (error)
        }
    }
}