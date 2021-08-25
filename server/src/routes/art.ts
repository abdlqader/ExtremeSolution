import { logger } from '../core/logger/logger';
import { RouteBase } from '../core/routes/RouteBase';
import { Request, Response } from 'express';
import { IsAuthorized } from '../middlewares/isAuth';

export class ArtRoute extends RouteBase {
  initRoutes(): void {
    this.path = '/';
    this.router.get('/art', IsAuthorized, this.getArt);
    this.router.post('/art', this.createArt);
    this.router.put('/art',this.editArt);
    this.router.delete('/art',this.deleteArt);
    this.router.get('/users', this.getUsers)
  }
  private getArt = async (req: Request, res: Response) => {
    try {
        console.log(req)
      res.status(200).send('result');
    } catch (e) {
      logger.error("error creating user : ",e);
      res.status(400).send(e.message);
    }
  };

  private createArt = async (req: Request, res: Response) => {
    try {
      res.status(200).send('result');
    } catch (e) {
      logger.error("error creating user : ",e);
      res.status(400).send(e.message);
    }
  };

  private editArt = async (req: Request, res: Response) => {
    try {
      res.status(200).send('result');
    } catch (e) {
      logger.error("error creating user : ",e);
      res.status(400).send(e.message);
    }
  };

  private deleteArt = async (req: Request, res: Response) => {
    try {
      res.status(200).send('result');
    } catch (e) {
      logger.error("error creating user : ",e);
      res.status(400).send(e.message);
    }
  };

  private getUsers = async (req: Request, res: Response) => {
    try {
      res.status(200).send('result');
    } catch (e) {
      logger.error("error creating user : ",e);
      res.status(400).send(e.message);
    }
  };
}
