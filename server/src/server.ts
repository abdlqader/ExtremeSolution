import { App } from './app';
import { RouteBase } from './core/routes/RouteBase';
import { AuthRoute } from './routes/auth'
require('dotenv').config();

const PORT = process.env.PORT_NUMBER || 3000;
const HOST = process.env.HOST_NAME || 'localhost';

let apiRoutes: RouteBase[] = [
    new AuthRoute()
];

let app = new App(apiRoutes);
app.listen(PORT, HOST);