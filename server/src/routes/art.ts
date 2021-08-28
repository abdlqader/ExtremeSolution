import { logger } from '../core/logger/logger';
import { RouteBase } from '../core/routes/RouteBase';
import { FilterParams, Request, Response } from '../configs/types';
import { IsAuthorized } from '../middlewares/isAuth';
import { IsAdmin } from '../middlewares/isAdmin';
import Art from '../models/Art.model';
import { ArtController } from '../controllers/artController';

export class ArtRoute extends RouteBase {
  artController = new ArtController();
  initRoutes(): void {
    this.path = '/';
    this.router.get('/art', IsAuthorized, this.getArt);
    this.router.post('/art', IsAdmin, this.createArt);
    this.router.put('/art', IsAdmin, this.editArt);
    this.router.delete('/art', IsAdmin, this.deleteArt);
  }
  private getArt = async (req: Request, res: Response) => {
    try {
      let art: FilterParams = req.body.page;
      let result: Array<Art> = await this.artController.get(art);
      res.status(200).send(result);
    } catch (e) {
      logger.error('error getting arts : ', e);
      res.status(400).send(e.message);
    }
  };

  private createArt = async (req: Request, res: Response) => {
    try {
      let art: Art = req.body.art;
      let result: string = await this.artController.create(art);
      res.status(200).send(result);
    } catch (e) {
      logger.error('error creating art : ', e);
      res.status(400).send(e.message);
    }
  };

  private editArt = async (req: Request, res: Response) => {
    try {
      let art: Art = req.body.art;
      let result: string = await this.artController.edit(art);
      res.status(200).send(result);
    } catch (e) {
      logger.error('error editing art : ', e);
      res.status(400).send(e.message);
    }
  };

  private deleteArt = async (req: Request, res: Response) => {
    try {
      let art: number = req.body.art.id;
      let result: string = await this.artController.delete(art);
      res.status(200).send(result);
    } catch (e) {
      logger.error('error deleting art : ', e);
      res.status(400).send(e.message);
    }
  };
}
