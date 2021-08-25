import express from 'express';
import { RouteBase } from './core/routes/RouteBase';
import { logger } from './core/logger/logger';
import { connect } from './database/connection';
var cors = require('cors');

export class App {
  private app: express.Application;
  constructor(Route: RouteBase[]) {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoute(Route);
  }

  public listen(port: string | number, host?: string) {
    connect.sync().then(() => {
      this.app.listen({ port, host }, () => {
        logger.info(`App listening on the port ${port}`);
      });
    });
  }
  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );
    this.app.use(cors());
  }
  private initializeRoute(Route: RouteBase[]) {
    Route.forEach((Route) => {
      Route.initRoutes();
      this.app.use(Route.path, Route.router);
    });
  }
}
