import { RouteBase } from '../core/routes/RouteBase';
import { Request, Response } from 'express';
import { logger } from '../core/logger/logger';
import User from '../models/User.model';
import { UserController } from '../controllers/userController';
import { IsAdmin } from '../middlewares/isAdmin';
import {
  FilterParams,
  LoginCredentials,
  LoginResponse,
} from '../configs/types';

export class AuthRoute extends RouteBase {
  userController = new UserController();
  initRoutes(): void {
    this.path = '/';
    this.router.post('/Login', this.login);
    this.router.post('/user', this.create);
    this.router.get('/users', IsAdmin, this.getUsers);
  }

  private create = async (req: Request, res: Response) => {
    try {
      const user: User = req.body.user;
      const result: String = await this.userController.create(user);
      res.status(200).send(result);
    } catch (e) {
      logger.error('error creating user : ', e);
      res.status(400).send(e.message);
    }
  };

  private login = async (req: Request, res: Response) => {
    try {
      const credentials: LoginCredentials = req.body.credentials;
      const result: LoginResponse = await this.userController.login(
        credentials
      );
      res.status(200).send(result);
    } catch (e) {
      logger.error('error while logging in : ', e);
      res.status(400).send(e.message);
    }
  };
  private getUsers = async (req: Request, res: Response) => {
    try {
      const page: FilterParams = req.body.page;
      const result: Array<User> = await this.userController.list(page);
      res.status(200).send(result);
    } catch (e) {
      logger.error('error getting users : ', e);
      res.status(400).send(e.message);
    }
  };
}
