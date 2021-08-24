import express from 'express';
import { RouteBase } from './core/routes/RouteBase';
import { logger } from './core/logger/logger'
var cors = require("cors");

export class App {
  private app: express.Application;
  constructor(Route: RouteBase[]) {
    this.app = express();
    this.initializeRoute(Route);
    this.initializeMiddlewares();
  }

  public listen(port: string | number, host?: string) {
    this.app.listen({ port, host }, () => {
      logger.info(`App listening on the port ${port}`);
    });
  }
  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({
        extended: true
    }));
    this.app.use(cors());
  }
  private initializeRoute(Route: RouteBase[]) {
    Route.forEach(Route => {
        Route.initRoutes()
        this.app.use(Route.path, Route.router);
    });
}
}
