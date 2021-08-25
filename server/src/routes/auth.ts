import { RouteBase } from '../core/routes/RouteBase';
import { Request, Response } from 'express';
import { logger } from '../core/logger/logger';
import User from '../models/User.model';

export class AuthRoute extends RouteBase {
  initRoutes(): void {
    this.path = '/';
    this.router.get('/Login', this.login);
    this.router.post('/user', this.create);
  }

  private create = async (req: Request, res: Response) => {
    try {
      const user = await User.create({
        name: 'Default',
        email: 'Default@mail.com',
        password: '1234',
        role: 'GUEST',
      });
      res.status(200).send('end point slaped');
    } catch (e) {
      logger.error(e);
      res.status(400).send(e.message);
    }
  };

  private login = async (req: Request, res: Response) => {
    try {
      console.log('end point slaped');
    } catch (e) {
      res.status(400).send(e.message);
    }
  };
}
