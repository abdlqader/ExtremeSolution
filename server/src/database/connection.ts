import { Sequelize } from "sequelize-typescript";

export const connect = new Sequelize({
    dialect: 'sqlite',
    storage: `./louvre.sqlite3`,
    models: [__dirname + '/../models/*.model.ts']
})