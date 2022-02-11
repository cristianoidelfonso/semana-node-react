// Importar sequelize
import { Sequelize } from 'sequelize';

// const db = new Sequelize('app_db', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

const db = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

export default db;
