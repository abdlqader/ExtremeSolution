import { App } from './app';
import { RouteBase } from './core/routes/RouteBase';

const PORT = process.env.PORT_NUMBER || 3000;
const HOST = process.env.HOST_NAME || 'localhost';

let apiRoutes: RouteBase[] = [];

let app = new App(apiRoutes);
app.listen(PORT, HOST);
