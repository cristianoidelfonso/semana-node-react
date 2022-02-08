// Importar sequelize
import { Sequelize } from 'sequelize';

const db = new Sequelize('app_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

export default db;
