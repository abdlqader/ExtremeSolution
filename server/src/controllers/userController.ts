import { Hash } from '../services/bcrypt';
import { LoginCredentials, LoginResponse } from '../configs/types';
import User from '../models/User.model';
import { JWT } from '../services/jwtService';

export class UserController {
  bcrypt = new Hash();
  jwt = new JWT();
  public create = async (user: User): Promise<string> => {
    try {
      user.password = await this.bcrypt.hash(user.password);
      await User.create(user);
      return 'User Created';
    } catch (error) {
      throw error;
    }
  };

  public login = async (
    credentials: LoginCredentials
  ): Promise<LoginResponse> => {
    try {
      let user = await User.findOne({
        where: {
          username: credentials.username,
        },
      });

      if (user) {
        let samePassword: boolean = await this.bcrypt.compare(
          credentials.password,
          user.password
        );
        if (samePassword) {
          let token: string = this.jwt.issue({
            payload: {
              id: user.id as number,
              role: user.role,
            },
          });
          return { token, role: user.role, username: user.username };
        } else
          throw {
            message: 'username or password is wrong',
          };
      } else
        throw {
          message: 'username or password is wrong',
        };
    } catch (error) {
      throw error;
    }
  };
}
